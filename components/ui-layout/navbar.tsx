"use client";
import { HomeIcon } from "@/assets/icon-svgs";
import Darkmode from "../ui-kit/darkmode";
import Profile from "../ui-kit/profile";
import { useState } from "react";

const Navbar = () => {
  const [switchtheme, setswitchtheme] = useState(false);
  return (
    <div className="flex justify-between items-center px-32 pl-44 pr-8 md:pr-32 bg-foreground py-4 fixed w-full z-50 border-[#21283A] border-b">
      <div className="flex justify-center items-center gap-2">
        {HomeIcon}{" "}
        <span className="font-[Gilory-Regular] font-bold text-sm">Home</span>/{" "}
        <span className="font-[Poppins-Regular] font-medium text-[#3F434A]">
          Analytics
        </span>{" "}
      </div>
      <div className="flex items-center gap-2">
        <Darkmode switchtheme={switchtheme} setswitchtheme={setswitchtheme} />
        <Profile imglink={`../../images/Frame 15.png`} name={`Amir`} />
      </div>
    </div>
  );
};

export default Navbar;
