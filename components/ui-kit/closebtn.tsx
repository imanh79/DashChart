"use client";
import { Button } from "../ui/button";
import { ArrowleftIcon } from "@/assets/icon-svgs";

const Closebtn = () => {
  return (
    <Button
      variant={"ghost"}
      className={`w-10 h-10 p-3 rounded-full bg-[#1E2331] border border-[rgba(255,255,255,0.09)] flex items-center justify-center duration-300 `}
    >
      {ArrowleftIcon}
    </Button>
  );
};

export default Closebtn;
