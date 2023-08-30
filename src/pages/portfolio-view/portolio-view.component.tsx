import { FunctionComponent, useEffect } from "react";
import Table from "../../components/table/table.component";
import LineChart from "../../components/charts/line-charts/line-charts.component";
import { useTableData } from "../../hooks/table/table-data/table-data.hook";
import { useDataForLineChart } from "../../hooks/charts/data-line-chart/data-line-chart.hook";
import DoughnutChart from "../../components/charts/doughnut/doughnut-charts.component";
import { useDataForDoughnutChart } from "../../hooks/charts/data-doughnut-chart/data-doughnut-chart.hook";
import { useRetrieveAssets } from "../../hooks/retrieve-assets/retrieve-assets.hook";
import AssetModal from "../../components/modale-asset/modal-asset.component";
import { useAssetModal } from "../../hooks/asset-modal/asset-modal.hook";

interface PortfolioViewPageProps {}

const PortfolioViewPage: FunctionComponent<PortfolioViewPageProps> = () => {
  const { assetList, setAssetList } = useRetrieveAssets();
  const { tableData } = useTableData(assetList);
  const { lineChartData } = useDataForLineChart(assetList);
  const { doughnutAssets } = useDataForDoughnutChart(assetList);
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleAddAsset,
    assets,
  } = useAssetModal();

  useEffect(() => {
    if (assets && assets.length > 0) setAssetList([...assets]);
  }, [assets]);

  return (
    <div>
      <span className="horizontal__center-align">
        <div className="horizontal__center-align">
          <DoughnutChart data={doughnutAssets} />
        </div>
        <div className="horizontal__center-align">
          <LineChart data={lineChartData} />
        </div>
      </span>

      <div>
        <div className="horizontal__center-align">
          {tableData ? (
            <Table {...tableData} handleOpenModal={handleOpenModal} />
          ) : null}
        </div>
      </div>
      <AssetModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddAsset={handleAddAsset}
      />
    </div>
  );
};

export default PortfolioViewPage;
