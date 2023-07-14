import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useDataForLineChart } from "./data-line-chart.hook";

describe("useDataForLineChart", () => {
  test("should return initial asset data", () => {
    const { result } = renderHook(() => useDataForLineChart());

    expect(result.current.assets).toEqual([
      {
        assetName: "Crypto",
        valuePerPeriod: [
          { date: expect.any(Date), value: 1000 },
          { date: expect.any(Date), value: 1300 },
          { date: expect.any(Date), value: 5000 },
          { date: expect.any(Date), value: 5500 },
        ],
      },
      {
        assetName: "Actions",
        valuePerPeriod: [
          { date: expect.any(Date), value: 1000 },
          { date: expect.any(Date), value: 1800 },
          { date: expect.any(Date), value: 3500 },
          { date: expect.any(Date), value: 4500 },
        ],
      },
    ]);
  });

  test("should update asset data", () => {
    const { result } = renderHook(() => useDataForLineChart());

    act(() => {
      result.current.updateAssets();
    });

    expect(result.current.assets).toEqual([
      {
        assetName: "Crypto",
        valuePerPeriod: [
          { date: expect.any(Date), value: 1000 },
          { date: expect.any(Date), value: 1300 },
          { date: expect.any(Date), value: 5000 },
          { date: expect.any(Date), value: 5500 },
        ],
      },
      {
        assetName: "Actions",
        valuePerPeriod: [
          { date: expect.any(Date), value: 1000 },
          { date: expect.any(Date), value: 1800 },
          { date: expect.any(Date), value: 3500 },
          { date: expect.any(Date), value: 4500 },
        ],
      },
    ]);
  });
});
