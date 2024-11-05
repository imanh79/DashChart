"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import Titlechart from "../titlechart";

// Register necessary components
Chart.register(
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0, // Set to 0 for a straight line between points
      stepped: true, // Enable stepped line
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "#2E5CC0",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
      color: "#2E5CC0",
    },
  ],
};

const config: any = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    interaction: {
      intersect: false,
      axis: "x",
    },
    plugins: {
      title: {
        display: true,
        text: "Stepped Line Chart",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Rainfall (mm)",
        },
      },
    },
  },
};

const Linechart = () => {
  return (
    <div className="">
      <div className=" xl:h-[400vh]">
        <Titlechart title={`Statistics`} value={false} />
        
        <Line
          data={data}
          options={config}
          className="
px-4  xl:!w-11/12 xl:!h-[200px] xl:mx-auto  mt-4"
        />
      </div>
    </div>
  );
};

export default Linechart;
