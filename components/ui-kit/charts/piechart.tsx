"use client";
import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import Titlechart from "../titlechart";
import Averagechart from "../averagechart";

// داده‌های تصادفی و رنگ‌ها
const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [120, 200, 80],
      backgroundColor: ["#FFCC00", "#4FD2C2", "#2E5CC0"],
      hoverOffset: 4,
      borderColor: "transparent",
    },
  ],
};

const config: any = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false, // غیر فعال کردن نسبت ابعاد پیش‌فرض
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Doughnut Chart",
      },
    },
  },
};

const Piechart = () => {
  return (
    <div className="w-full flex flex-col items-center  mx-auto  ">
      <Titlechart title={`Projects`} value={true} />
      <div className="w-40 h-40 relative mb-4">
        <Doughnut data={data} options={config} className="" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          20%
        </p>
      </div>
      <Averagechart />
    </div>
  );
};

export default Piechart;
