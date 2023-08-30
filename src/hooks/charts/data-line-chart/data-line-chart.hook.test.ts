import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Asset } from "../../../lib/models/asset/asset.model";
import { AssetValueHistory } from "../../../lib/models/charts/chart.model";
import { ChartsService } from "../../../lib/services/charts/chart.service";
import { useDataForLineChart } from "./data-line-chart.hook";

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

const assetValueHistoryList: AssetValueHistory[] = [
  {
    assetName: "Bitcoin",
    valuePerPeriod: [
      { value: 1000, date: expect.any(Date) },
      { value: 1300, date: expect.any(Date) },
      { value: 5000, date: expect.any(Date) },
      { value: 5500, date: expect.any(Date) },
    ],
  },
  {
    assetName: "Tesla",
    valuePerPeriod: [
      { value: 1000, date: expect.any(Date) },
      { value: 1300, date: expect.any(Date) },
      { value: 5000, date: expect.any(Date) },
      { value: 5500, date: expect.any(Date) },
    ],
  },
];

describe("useDataForLineChart", () => {
  test("should return initial line chart data", () => {
    const assetList: Asset[] = assets;

    const { result } = renderHook(() => useDataForLineChart(assetList));

    expect(result.current.lineChartData).toEqual(assetValueHistoryList);
  });

  test("should update line chart data", () => {
    const assetList: Asset[] = assets;

    const { result } = renderHook(() => useDataForLineChart(assetList));

    const newAssetList: Asset[] = assets;

    act(() => {
      result.current.updateLineChartData(
        ChartsService.generateAssetValueHistoryList(newAssetList)
      );
    });

    expect(result.current.lineChartData).toEqual(assetValueHistoryList);
  });
});
