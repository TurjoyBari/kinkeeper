import React, { useEffect, useState } from "react";

const FrindList = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 1500);
    };
    fetchData();
  }, []);

  return (
    <div className=" bg-base-100 max-w-7xl mx-auto pt-10 pb-10">
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Your Friends</h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {friends.map((friend) => {
          return (
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={friend.picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{friend.name}</h2>
                <p>{friend.days_since_contact}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrindList;
