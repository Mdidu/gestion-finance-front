import { useState } from "react";
import { DoughnutChartData } from "../../../lib/models/charts/chart.model";
import { chooseColor } from "../../../utils/colors/choose-color";
import { ChartsConstantes } from "../constantes";

export const useDataForDoughnutChart = () => {
  // Récuperer les données de l'API pour remplacer le mock
  const mockTest = [
    { label: "Crypto", amount: 5 },
    { label: "Actions", amount: 5 },
    { label: "Immobilier", amount: 5 },
    { label: "Livret", amount: 5 },
  ];

  const labelList = mockTest.map((item) => item.label);
  const amountList = mockTest.map((item) => item.amount);
  const mockDataForDoughnutChart: DoughnutChartData = {
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
  const [doughnutAssets, setDoughnutAssets] = useState(
    mockDataForDoughnutChart
  );

  const updateDoughnutAssets = () => {
    setDoughnutAssets(mockDataForDoughnutChart);
  };

  return { doughnutAssets, updateDoughnutAssets };
};
