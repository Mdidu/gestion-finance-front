import { FunctionComponent } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import {
  AssetValueHistory,
  LineChartData,
  LineChartOptions,
} from "../../../lib/models/charts/chart.model";
import { chooseColor } from "../../../utils/colors/choose-color";

interface LineChartProps {
  data: AssetValueHistory[];
  label?: string;
  color?: string;
}
const options: LineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "",
    },
  },
};
const LineChart: FunctionComponent<LineChartProps> = ({ data }) => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dataChart: LineChartData = {
    labels,
    datasets: data.map((Asset, index) => ({
      label: Asset.assetName,
      data: Asset.valuePerPeriod.map((value) => value.totalAmount),
      borderColor: chooseColor(index),
      backgroundColor: chooseColor(index),
    })),
  };

  return (
    <div className="horizontal__center-align width__middle">
      <Line options={options} data={dataChart} />
    </div>
  );
};

export default LineChart;
