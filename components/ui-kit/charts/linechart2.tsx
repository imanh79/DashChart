"use client";
import * as React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import Titlechart from "../titlechart";
import Linechartbox from "../linechartbox";

// ثبت کامپوننت‌های Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

// تعریف داده‌ها و برچسب‌ها
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Another dataset",
      data: [30, 40, 60, 20, 50, 70, 80],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      fill: true,
      tension: 0.4,
      stack: "stack1",
    },
  ],
};

const config: any = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false, // غیرفعال کردن نسبت ثابت
    plugins: {
      title: {
        display: true,
        text: "My Stacked Area Chart",
      },
      tooltip: {
        mode: "index",
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        stacked: true,
        beginAtZero: true,
      },
    },
  },
};

const Linechart2 = () => {
  return (
    <div className=" xl:h-[400vh] ">
      <Titlechart title={`Statistics`} value={false} />
      <Linechartbox />
      <Line
        data={data}
        options={config}
        className="px-4  xl:!w-11/12 xl:!h-[190px] xl:mx-auto mt-4"
      />
    </div>
  );
};

export default Linechart2;
