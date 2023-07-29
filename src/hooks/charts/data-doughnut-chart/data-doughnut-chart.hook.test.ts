import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Asset } from "../../../lib/models/asset/asset.model";
import { useDataForDoughnutChart } from "./data-doughnut-chart.hook";

const assets: Asset[] = [
  {
    id: 1,
    name: "Bitcoin",
    distribution: 50,
    valuePerPeriod: [
      { date: expect.any(Date), value: 1000 },
      { date: expect.any(Date), value: 1300 },
      { date: expect.any(Date), value: 5000 },
      { date: expect.any(Date), value: 5500 },
    ],
    totalAmount: 5500,
  },
  {
    id: 2,
    name: "Tesla",
    distribution: 50,
    valuePerPeriod: [
      { date: expect.any(Date), value: 1000 },
      { date: expect.any(Date), value: 1300 },
      { date: expect.any(Date), value: 5000 },
      { date: expect.any(Date), value: 5500 },
    ],
    totalAmount: 5500,
  },
];

describe("useDataForDoughnutChart", () => {
  test("should return initial doughnut chart data", () => {
    const assetList: Asset[] = assets;

    const { result } = renderHook(() => useDataForDoughnutChart(assetList));

    expect(result.current.doughnutAssets).toEqual({
      labels: assetList.map((item) => item.name),
      datasets: [
        {
          label: "Amount ",
          data: assetList.map((item) => item.totalAmount),
          backgroundColor: ["rgb(255, 0, 0)", "rgb(0, 255, 0)"],
          borderColor: ["rgb(255, 0, 0)", "rgb(0, 255, 0)"],
          borderWidth: 1,
        },
      ],
    });
  });

  test("should update doughnut chart data", () => {
    const assetList: Asset[] = assets;

    const { result } = renderHook(() => useDataForDoughnutChart(assetList));

    const newAssetList: Asset[] = assets;

    act(() => {
      result.current.updateDoughnutAssets();
    });

    expect(result.current.doughnutAssets).toEqual({
      labels: assetList.map((item) => item.name),
      datasets: [
        {
          label: "Amount ",
          data: assetList.map((item) => item.totalAmount),
          backgroundColor: ["rgb(255, 0, 0)", "rgb(0, 255, 0)"],
          borderColor: ["rgb(255, 0, 0)", "rgb(0, 255, 0)"],
          borderWidth: 1,
        },
      ],
    });
  });
});
