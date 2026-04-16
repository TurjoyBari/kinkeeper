import React, { useContext } from "react";
import useFriend from "../../hooks/useFriend";
import { TimelineDataContext } from "../../context/TimelineDataContext";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import EmptyState from "../errorpage/EmptyState";

const StatsPage = () => {
  const { timelineData } = useContext(TimelineDataContext);

  const { friends, loading } = useFriend();

  
  const callCount = timelineData.filter(item => item.type === "call").length;
  const textCount = timelineData.filter(item => item.type === "text").length;
  const videoCount = timelineData.filter(item => item.type === "video").length;


  const data = [
    callCount > 0 && { name: "Call", value: callCount, fill: "#3B82F6" },
    textCount > 0 && { name: "Text", value: textCount, fill: "#10B981" },
    videoCount > 0 && { name: "Video", value: videoCount, fill: "#8B5CF6" },
  ].filter(Boolean);

 
  if (data.length === 0) {
    return (
      <EmptyState/>
    );
  }

  return (
    <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      
      <h2 className="font-semibold text-3xl mb-10 text-center">
        Friendship Analytics
      </h2>

  
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "auto",
          aspectRatio: 1,
        }}
      >
        <Pie
          data={data}
          innerRadius="70%"
          outerRadius="100%"
          paddingAngle={5}
          dataKey="value"
        />
        <Legend />
        <Tooltip />
      </PieChart>

    </div>
  );
};

export default StatsPage;