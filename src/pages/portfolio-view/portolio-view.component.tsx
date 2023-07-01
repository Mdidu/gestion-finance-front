import { FunctionComponent } from "react";
import Table from "../../components/table/table.component";
import LineChart from "../../components/charts/line-charts/line-charts.component";
import { useTableData } from "../../hooks/table/table-data/table-data.hook";
import { useDataForLineChart } from "../../hooks/charts/data-line-chart/data-line-chart.hook";

interface PortfolioViewPageProps {}

const PortfolioViewPage: FunctionComponent<PortfolioViewPageProps> = () => {
  const { tableData } = useTableData();
  const { assets } = useDataForLineChart();

  return (
    <div>
      <div className="horizontal__center-align height_middle">
        <LineChart data={assets} />
      </div>

      <div className="horizontal__center-align">
        {tableData ? <Table {...tableData} /> : null}
      </div>
    </div>
  );
};

export default PortfolioViewPage;
