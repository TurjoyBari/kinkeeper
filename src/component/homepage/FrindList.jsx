import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import useFriend from "../../hooks/useFriend";
import { Link } from "react-router";

const FrindList = () => {
  const { friends, loading } = useFriend();

  const statusClass = {
    "almost due": "badge-warning",
    overdue: "badge-error",
    "on-track": "badge-success",
  };

  return (
    <div className=" bg-base-100 max-w-7xl mx-auto pt-10 pb-10">
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Your Friends</h2>
      </div>

      {loading ? (
        <div className="w-full h-fit flex justify-center items-center">
          <HashLoader color="#244D3F" size={60} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-3 justify-center">
          {friends.map((friend) => {
            return (
              <Link to={`/${friend.id}`} className="card bg-base-100 w-96 shadow-sm text-center p-5">
                <figure>
                  <img
                    className="rounded-full size-25"
                    src={friend.picture}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-[20px] font-semibold pb-3">{friend.name}</h2>
                  <p className="text-sm text-gray-500">{friend.days_since_contact}</p>
                  <div className="flex gap-3 justify-center uppercase ">
                    <div className="badge badge-soft badge-success text-[12px] font-medium bg-[#CBFADB] rounded-full text-[#244D3F]">
                      {friend.tags[0]}
                    </div>
                    {friend.tags?.[1] && friend.tags[1].length > 0 ? (
                      <span className="badge badge-soft badge-success text-[12px] font-medium bg-[#CBFADB] rounded-full text-[#244D3F]">
                        {friend.tags[1]}
                      </span>
                    ) : null}
                  </div>
                  <div>
                    {statusClass[friend.status] && (
                      <div
                        className={`badge ${statusClass[friend.status]} rounded-full capitalize text-[12px] font-medium text-white`}
                      >
                        {friend.status}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FrindList;
