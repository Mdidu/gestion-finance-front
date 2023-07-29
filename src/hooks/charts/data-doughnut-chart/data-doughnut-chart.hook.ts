import { useEffect, useState } from "react";
import { Asset } from "../../../lib/models/asset/asset.model";
import { DoughnutChartData } from "../../../lib/models/charts/chart.model";
import { chooseColor } from "../../../utils/colors/choose-color";
import { ChartsConstantes } from "../constantes";

export const useDataForDoughnutChart = (assetList: Asset[]) => {
  const labelList = assetList.map((item) => item.name);
  const amountList = assetList.map((item) => item.totalAmount);

  const doughnutChartData: DoughnutChartData = {
    labels: labelList,
    datasets: [
      {
        label: ChartsConstantes.DOUGHNUT_DATASET_LABEL,
        data: amountList,
        backgroundColor: amountList.map((_, index) => chooseColor(index)),
        borderColor: amountList.map((_, index) => chooseColor(index)),
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    updateDoughnutAssets();
  }, [assetList]);

  const [doughnutAssets, setDoughnutAssets] = useState(doughnutChartData);

  const updateDoughnutAssets = () => {
    setDoughnutAssets(doughnutChartData);
  };

  return { doughnutAssets, updateDoughnutAssets };
};
