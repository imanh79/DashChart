"use client";
import { Doughnut, Pie } from "react-chartjs-2";
import Titlechart from "../titlechart";
import Averagechart from "../averagechart";

const data = {
  labels: [
    "Overall Yay",
    "Overall Nay",
    "Group A Yay",
    "Group A Nay",
    "Group B Yay",
  ],
  datasets: [
    {
      backgroundColor: ["#4FD2C2", "#4fd2c34e"],
      data: [250, 79],
      borderRadius: 50,
      borderColor: "#000",
      borderWidth:2,
    },
    {
      backgroundColor: ["#2E5CC0", "#2e5cc066"],
      data: [170, 67],
      borderRadius: 50,
      borderColor: "#000",
      borderWidth: 2,
    },
    {
      backgroundColor: ["#FFCC00", "#ffcc006d"],
      data: [100, 80],
      borderRadius: 50,
      borderColor: "#000",
      borderWidth: 2,
    },
  ],
};
const config: any = {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          generateLabels: function (chart: any) {
            // Get the default label list
            const original: any =
              chart.overrides.pie.plugins.legend.labels.generateLabels;
            const labelsOriginal = original.call(this, chart);

            // Build an array of colors used in the datasets of the chart
            let datasetColors = chart.data.datasets.map(function (e: any) {
              return e.backgroundColor;
            });
            datasetColors = datasetColors.flat();

            // Modify the color and hide state of each label
            labelsOriginal.forEach((label: any) => {
              // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
              label.datasetIndex = (label.index - (label.index % 2)) / 2;

              // The hidden state must match the dataset's hidden state
              label.hidden = !chart.isDatasetVisible(label.datasetIndex);

              // Change the color to match the dataset
              label.fillStyle = datasetColors[label.index];
            });

            return labelsOriginal;
          },
        },
        onClick: function (mouseEvent: any, legendItem: any, legend: any) {
          // toggle the visibility of the dataset from what it currently is
          legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden =
            legend.chart.isDatasetVisible(legendItem.datasetIndex);
          legend.chart.update();
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const labelIndex = context.datasetIndex * 2 + context.dataIndex;
            return (
              context.chart.data.labels[labelIndex] +
              ": " +
              context.formattedValue
            );
          },
        },
      },
    },
  },
};
const Muiltipiechart = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Titlechart title={`Projects`} value={true} />
      <div className="w-44 h-44 relative mb-4">
        <Doughnut data={data} options={config} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-[Poppins-Regular] text-center">
          <p className="text-2xl">830</p>{" "}
          <span className="text-sm text-center text-[#8A9099]">projects</span>{" "}
        </div>
      </div>
      <Averagechart />
    </div>
  );
};

export default Muiltipiechart;
