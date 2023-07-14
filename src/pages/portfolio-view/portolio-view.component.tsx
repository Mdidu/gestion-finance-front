import { FunctionComponent } from "react";
import Table from "../../components/table/table.component";
import LineChart from "../../components/charts/line-charts/line-charts.component";
import { useTableData } from "../../hooks/table/table-data/table-data.hook";
import { useDataForLineChart } from "../../hooks/charts/data-line-chart/data-line-chart.hook";
import DoughnutChart from "../../components/charts/doughnut/doughnut-charts.component";
import { useDataForDoughnutChart } from "../../hooks/charts/data-doughnut-chart/data-doughnut-chart.hook";

interface PortfolioViewPageProps {}

const PortfolioViewPage: FunctionComponent<PortfolioViewPageProps> = () => {
  const { tableData } = useTableData();
  const { assets } = useDataForLineChart();
  const { doughnutAssets } = useDataForDoughnutChart();
  return (
    <div>
      <div className="horizontal__center-align">
        <DoughnutChart data={doughnutAssets} />
      </div>
      <div className="horizontal__center-align">
        <LineChart data={assets} />
      </div>

      <div className="horizontal__center-align">
        {tableData ? <Table {...tableData} /> : null}
      </div>
    </div>
  );
};

export default PortfolioViewPage;
