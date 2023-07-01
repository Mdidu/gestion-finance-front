import { useState } from "react";
import { AssetValueHistory } from "../../../lib/models/charts/chart.model";

export const useDataForLineChart = () => {
  const mockDataForLineChart: AssetValueHistory[] = [
    {
      nameAsset: "Crypto",
      valuePerPeriod: [
        { date: new Date(), value: 1000 },
        { date: new Date(), value: 1300 },
        { date: new Date(), value: 5000 },
        { date: new Date(), value: 5500 },
      ],
    },
    {
      nameAsset: "Actions",
      valuePerPeriod: [
        { date: new Date(), value: 1000 },
        { date: new Date(), value: 1800 },
        { date: new Date(), value: 3500 },
        { date: new Date(), value: 4500 },
      ],
    },
  ];
  const [assets, setAssets] = useState(mockDataForLineChart);

  const updateAssets = () => {
    setAssets(mockDataForLineChart);
  };

  return { assets, updateAssets };
};
