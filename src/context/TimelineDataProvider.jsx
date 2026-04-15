import React, { createContext, useState } from "react";
import { TimelineDataContext } from "./TimelineDataContext";

const TimelineDataProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  const data = {
    timelineData,
    setTimelineData,
  };

  

  return (
    <TimelineDataContext.Provider value={data}>
      {children}
    </TimelineDataContext.Provider>
  );
};

export default TimelineDataProvider;
