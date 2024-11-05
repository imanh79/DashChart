import { ArrowButtonIcon, ArrowTopIcon } from "@/assets/icon-svgs";
import React from "react";

const Linechartbox = () => {
  return (
    <div className="flex justify-start gap-10 ml-4 mt-2">
      <div className="flex items-center gap-2">
        <span className="w-10 h-10 bg-[#1B2D30] flex justify-center items-center rounded-lg">
          {ArrowTopIcon}
        </span>
        <div className="flex flex-col">
          <span className="text-[#C3C9D2]">9.500</span>
          <p className="text-[#3F4958] text-sm">Income</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-10 h-10 bg-[#1B2D37]  flex justify-center items-center rounded-lg">
          {ArrowButtonIcon}
        </span>
        <div className="flex flex-col">
          <span className="text-[#C3C9D2]">1.400</span>
          <p className="text-[#3F4958] text-sm">Expense</p>
        </div>
      </div>
    </div>
  );
};

export default Linechartbox;
