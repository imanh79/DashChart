import React from "react";
import Listmenu from "../ui-kit/list-menu";
import {
  FilesearcherIcon,
  FolderIcon,
  HistogramIcon,
  HomeIcon,
  Logo,
  LogoutIcon,
  OptionIcon,
  PiechartIcon,
  SettingIcon,
} from "@/assets/icon-svgs";
import Image from "next/image";
import Closebtn from "../ui-kit/closebtn";

const Sidebar = () => {
  return (
    <div className=" fixed bottom-0 w-32 h-screen flex flex-col items-center bg-[#171C28] pt-3 z-50 border-r border-[rgba(255,255,255,0.08)]">
      <div className="from-[#4FD2C2] to-[#25AD9C] bg-gradient-to-b min-w-[70px] min-h-[70px] flex justify-center items-center rounded-md">
        {Logo}
      </div>
      <div className="flex flex-col gap-5 mt-8">
        <Listmenu svgurl={HomeIcon} />
        <Listmenu svgurl={HistogramIcon} />
        <Listmenu svgurl={PiechartIcon} />
        <Listmenu svgurl={FilesearcherIcon} />
        <Listmenu svgurl={OptionIcon} />
        <Listmenu svgurl={FolderIcon} />
      </div>
      <div className="flex flex-col gap-4 mt-14 ">
        {" "}
        <Listmenu svgurl={SettingIcon} />
        <Listmenu svgurl={LogoutIcon} />
      </div>
      <div className=" absolute top-7 -right-5 "><Closebtn/></div>
    </div>
  );
};

export default Sidebar;
