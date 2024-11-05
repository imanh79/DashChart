import { CalenderIcon, DotsIcon } from "@/assets/icon-svgs";
import React from "react";
import { Button } from "../ui/button";

const Titlechart = ({ title, value }: any) => {

  return (
    <div className="flex justify-between items-center w-full px-4  mt-4">
      <span className="text-lg text-[#B6B6B6]">{title}</span>
      {value ? (
        <> {DotsIcon}</>
      ) : (
        <Button
          className="flex items-center justify-center gap-1 bg-[#1D2537] text-[#939AA5]"
          variant={"ghost"}
        >
          {CalenderIcon} 19 Aug – 25 Aug
        </Button>
      )}
    </div>
  );
};

export default Titlechart;
