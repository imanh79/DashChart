import React from "react";

const Averagechart = () => {
  return (
    <div className=" flex items-center gap-4  pb-4">
      <div className="flex flex-col items-center gap-0">
        <span className="w-1 h-1 rounded-[1px] bg-[#4FD2C2]"></span>{" "}
        <span>420</span> <p className="text-[#8A9099] text-sm">Ongoing</p>
      </div>
      <div className="flex flex-col items-center gap-0 border-l border-r border-white px-4">
        <span className="w-1 h-1 rounded-[1px] bg-blue-500"></span>{" "}
        <span>210</span> <p className="text-[#8A9099] text-sm">Hold</p>
      </div>
      <div className="flex flex-col items-center gap-0">
        <span className="w-1 h-1 rounded-[1px] bg-yellow-500"></span>{" "}
        <span>200</span> <p className="text-[#8A9099] text-sm">Done</p>
      </div>
    </div>
  );
};

export default Averagechart;
