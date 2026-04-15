import React, { useContext , useState } from "react";
import TimelineDataProvider from "../../context/TimelineDataProvider";
import { TimelineDataContext } from "../../context/TimelineDataContext";
import { FaHandshake, FaPhoneAlt, FaSms, FaVideo } from "react-icons/fa";

const TimeLinePage = () => {
  const { timelineData, setTimelineData } = useContext(TimelineDataContext);
  const [filter, setFilter] = useState("all");

  const getIcon = (type) => {
    switch (type) {
      case "call":
        return <FaPhoneAlt className="text-blue-500" />;
      case "text":
        return <FaSms className="text-green-500" />;
      case "video":
        return <FaVideo className="text-purple-500" />;
      default:
        return <FaHandshake className="text-yellow-500" />;
    }
  };


  const filteredData =
  filter === "all"
    ? timelineData
    : timelineData.filter((item) => item.type === filter);

  return (
    <div className="max-w-7xl mx-auto pt-10 pb-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

      {/* Filter */}
      <div className="mb-4">
        <select
          className="select select-bordered w-64"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Filter All</option>
          <option value="call">Calls</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      

      {filteredData.map((item) => (
        <div key={item.id}  className="pb-6">
          <div className="card bg-base-100 shadow p-4 flex gap-3">
            <div className="text-2xl">{getIcon(item.type)}</div>

            <div>
              <p className="text-base">
                <span className="font-semibold text-green-700 capitalize">
                  {item.type}
                </span>{" "}
                <span className="text-gray-500">with {item.name}</span>
              </p>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLinePage;
