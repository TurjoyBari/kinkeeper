import React, { useContext } from "react";
import { useParams } from "react-router";
import useFriend from "../../hooks/useFriend";

import { FaPhoneAlt, FaSms, FaVideo } from "react-icons/fa";
import { HiOutlineArchive } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { IoAlarmOutline } from "react-icons/io5";
import { HashLoader } from "react-spinners";
import { TimelineDataContext } from "../../context/TimelineDataContext";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriend();
  const expectedFriend = friends.find((friend) => String(friend.id) === id);

  const statusClass = {
    "almost due": "badge-warning",
    overdue: "badge-error",
    "on-track": "badge-success",
  };

  const { timelineData, setTimelineData } = useContext(TimelineDataContext);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <HashLoader color="#244D3F" size={60} />
      </div>
    );
  }

  const handleTimelineData = (type) => {
  const newItem = {
    id: Date.now(),
    type: type,
    name: expectedFriend.name,
    date: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };

  setTimelineData([...timelineData, newItem]);
};

  console.log(timelineData, "context");

  return (
    <div>
      <div className="p-6 bg-base-200 ">
        <div className="max-w-7xl mx-auto pt-10 pb-10 ">
          <div className="grid md:grid-cols-4 gap-4">
            
            <div className="col-span-1 space-y-3 ">
              <div className="card bg-base-100 shadow p-4 text-center">
                <div className="avatar mx-auto mb-2">
                  <div className="w-16 rounded-full">
                    <img src={expectedFriend?.picture} alt="" />
                  </div>
                </div>

                <h2 className="font-semibold pb-3">{expectedFriend?.name}</h2>

                <div className="pb-3">
                    <div className="badge badge-soft badge-success text-[12px] font-medium bg-[#CBFADB] rounded-full text-[#244D3F]">
                      {expectedFriend.tags[0]}
                    </div>
                    {expectedFriend.tags?.[1] && expectedFriend.tags[1].length > 0 ? (
                      <span className="badge badge-soft badge-success text-[12px] font-medium bg-[#CBFADB] rounded-full text-[#244D3F]">
                        {expectedFriend.tags[1]}
                      </span>
                    ) : null}
                </div>
                <div className="pb-3">
                    {statusClass[expectedFriend.status] && (
                      <div
                        className={`badge ${statusClass[expectedFriend.status]} rounded-full capitalize text-[12px] font-medium text-white`}
                      >
                        {expectedFriend.status}
                      </div>
                    )}
                </div>

                <p className="text-sm italic text-gray-500">
                  "{expectedFriend?.bio}"
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  
                </p>
              </div>

              
              <button className="btn w-full justify-start gap-2">
                <IoAlarmOutline /> Snooze 2 Weeks
              </button>

              <button className="btn w-full justify-start gap-2">
                <HiOutlineArchive /> Archive
              </button>

              <button className="btn w-full justify-start gap-2 text-error">
                <MdDelete /> Delete
              </button>
            </div>

            
            <div className="col-span-3 space-y-4">
              {/* TOP STATS */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card bg-base-100 shadow p-4 text-center">
                  <h2 className="text-2xl font-bold">
                    {expectedFriend?.days_since_contact}
                  </h2>
                  <p className="text-sm text-gray-500">Days Since Contact</p>
                </div>

                <div className="card bg-base-100 shadow p-4 text-center">
                  <h2 className="text-2xl font-bold">{expectedFriend?.goal}</h2>
                  <p className="text-sm text-gray-500">Goal (Days)</p>
                </div>

                <div className="card bg-base-100 shadow p-4 text-center">
                  <h2 className="text-lg font-semibold">
                    {expectedFriend?.next_due_date}
                  </h2>
                  <p className="text-sm text-gray-500">Next Due</p>
                </div>
              </div>

            
              <div className="card bg-base-100 shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Relationship Goal</h3>
                  <p className="text-sm text-gray-500">
                    Connect every <span className="font-bold">30 days</span>
                  </p>
                </div>
                <button className="btn btn-sm">Edit</button>
              </div>

              
              <div className="card bg-base-100 shadow p-4">
                <h3 className="font-semibold mb-3">Quick Check-In</h3>

                <div className="grid grid-cols-3 gap-4">
                  <button
                    className="btn flex flex-col gap-2 h-20"
                    onClick={() => handleTimelineData("call")}
                  >
                    <FaPhoneAlt size={18} />
                    Call
                  </button>

                  <button
                    className="btn flex flex-col gap-2 h-20"
                    onClick={() => handleTimelineData("text")}
                  >
                    <FaSms size={18} />
                    Text
                  </button>

                  <button
                    className="btn flex flex-col gap-2 h-20"
                    onClick={() => handleTimelineData("video")}
                  >
                    <FaVideo size={18} />
                    Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
