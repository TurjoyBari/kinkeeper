import React, { useEffect, useState } from 'react';



const FrindList = () => {

    const [friend, setFriend] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friend.json");
      const data = await res.json();

      setTimeout(() => {
        setFriend(data);
        setLoading(false);
      }, 1500);
    };
    fetchData();
  }, []);
    

    return (
        <div className="grid grid-cols-4 bg-base-100 max-w-7xl mx-auto gap-6 pt-10 pb-10"> 
            
        </div>
    );
};

export default FrindList;