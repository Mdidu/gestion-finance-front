import { FunctionComponent } from "react";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChartData } from "../../../lib/models/charts/chart.model";

type DoughnutChartProps = {
  data: DoughnutChartData;
};

const DoughnutChart: FunctionComponent<DoughnutChartProps> = (
  props: DoughnutChartProps
) => {
  return (
    <div className="horizontal__center-align">
      <Doughnut data={props.data} />
    </div>
  );
};

export default DoughnutChart;
