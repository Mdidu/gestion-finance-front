import { useEffect, useState } from "react";
import { Asset } from "../../../lib/models/asset/asset.model";
import { AssetValueHistory } from "../../../lib/models/charts/chart.model";
import { ChartsService } from "../../../lib/services/charts/chart.service";

export const useDataForLineChart = (assetList: Asset[]) => {
  const [lineChartData, setLineChartData] = useState<AssetValueHistory[]>([]);

  useEffect(() => {
    updateLineChartData(ChartsService.generateAssetValueHistoryList(assetList));
  }, [assetList]);

  const updateLineChartData = (assetValueHistoryList: AssetValueHistory[]) => {
    setLineChartData(assetValueHistoryList);
  };

  return { lineChartData, updateLineChartData };
};
