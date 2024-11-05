import React from "react";

import Linechart from "../ui-kit/charts/linechart";
import Piechart from "../ui-kit/charts/piechart";
import Linechart2 from "../ui-kit/charts/linechart2";
import Muiltipiechart from "../ui-kit/charts/muiltipiechart";
import Barchart from "../ui-kit/charts/barchart";

const Main = () => {
  return (
    <div className="w-full h-full xl:h-screen pl-36 pt-[114px] pb-4 pr-4  grid gap-4 overflow-hidden grid-cols-1  md:grid-cols-4 lg:grid-cols-4 grid-rows-3 lg:grid-rows-2">
      <div className="border col-span-1 row-span-1 overflow-hidden bg-foreground rounded-md border-[#21283A]">
        <Piechart />
      </div>
      <div className="border col-span-1 md:col-span-2 row-span-1 overflow-hidden bg-foreground rounded-md border-[#21283A]">
        <Linechart2 />
      </div>
      <div className="border col-span-1 row-span-1 overflow-hidden bg-foreground rounded-md border-[#21283A]">
        <Muiltipiechart />
      </div>
      <div className="border col-span-1 md:col-span-2 row-span-1 overflow-hidden bg-foreground rounded-md border-[#21283A]">
        <Barchart />
      </div>
      <div className="border col-span-1 md:col-span-2 row-span-1 overflow-hidden bg-foreground rounded-md border-[#21283A]">
        <Linechart />
      </div>
    </div>
  );
};

export default Main;
