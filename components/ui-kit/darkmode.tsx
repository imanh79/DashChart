import { MoonIcon, SunIcon } from "@/assets/icon-svgs";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Darkmode = ({ setswitchtheme, switchtheme }: any) => {
  return (
    <div className=" border-r hidden md:block">
      <div className="bg-card-foreground rounded-full w-24 h-12 mr-4 flex items-center justify-evenly relative ">
        <button
          className={`w-10 flex justify-center z-30 ${!switchtheme?"opacity-30":"opacity-1"}`}
          onClick={() => setswitchtheme(!switchtheme)}
        >
          {SunIcon}
        </button>
        <button
          className={`w-10 flex justify-center z-30 ${switchtheme?"opacity-30":"opacity-1"}`}
          onClick={() => setswitchtheme(!switchtheme)}
        >
          {MoonIcon}
        </button>
        <div
          className={` absolute w-10 h-10 bg-teal-400 rounded-full z-10 duration-300 ${
            switchtheme ? "-translate-x-[23px]" : "translate-x-[22px]"
          } `}
        ></div>
      </div>
    </div>
  );
};

export default Darkmode;
