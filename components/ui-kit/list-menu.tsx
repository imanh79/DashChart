"use client";
import { useState } from "react";
import { Button } from "../ui/button";

const Listmenu = ({ svgurl }: any) => {
  const [hover, sethover] = useState(false);
  return (
    <div className=" relative ">
      {hover && (
        <span className="absolute h-12 w-[2px] bg-[#2AB1A1] -right-10 top-1 rounded-xl duration-500 shadow-[#2AB1A1_0px_50px_100px_3px]"></span>
      )}{" "}
      <Button
        variant={"ghost"}
        className={`w-[50px] h-[50px] rounded-full bg-[#192130] border border-[rgba(255,255,255,0.09)] flex items-center justify-center duration-300 ${
          hover ? " opacity-1" : "opacity-40"
        }`}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        {svgurl}
      </Button>
    </div>
  );
};

export default Listmenu;
