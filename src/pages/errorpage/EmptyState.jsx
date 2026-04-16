import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router";

const EmptyState = ({ filter }) => {
  const getMessage = () => {
    if (filter === "call") return "No call logs found";
    if (filter === "text") return "No text messages found";
    if (filter === "video") return "No video interactions found";
    return "No activity yet";
  };

  return (
    <div className="flex flex-col items-center justify-center h-[65vh] text-center px-4">
      
     
      <div className="w-20 h-20 rounded-full bg-base-300 flex items-center justify-center mb-4 shadow-inner">
        <FaRegClock className="text-3xl text-gray-500" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-700">
        {getMessage()}
      </h2>

     
      <p className="text-gray-400 mt-2 max-w-md">
        You haven’t recorded any interactions yet. Start by making a call,
        sending a message, or scheduling a video chat.
      </p>

      
      <Link to={"/"} className="btn btn-primary mt-6 px-6">
        Add First Interaction
      </Link>
    </div>
  );
};

export default EmptyState;