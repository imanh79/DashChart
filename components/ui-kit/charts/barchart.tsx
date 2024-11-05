"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Titlechart from "../titlechart";

ChartJS.register(BarElement);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [80, 60, 40, 50, 60, 60, 70],
      backgroundColor: "#2E5CC0",
      barPercentage: 0.3,
      borderRadius: 50,
    },
    {
      label: "Dataset 2",
      data: [50, 80, 90, 80, 70, 90, 80],
      backgroundColor: "#4FD2C2",
      barPercentage: 0.3,
      borderRadius: 50,
    },
  ],
};

const options: any = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      position: "top",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const Barchart = () => {
  return (
    <div className="xl:h-[400vh]">
      <Titlechart title={`Statistics`} value={false} />
      <Bar
        data={data}
        options={options}
        className="
px-4   xl:!w-11/12 xl:!h-[200px] xl:mx-auto  mt-4"
      />
    </div>
  );
};

export default Barchart;
