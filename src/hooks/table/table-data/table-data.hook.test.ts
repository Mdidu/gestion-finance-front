import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Asset } from "../../../lib/models/asset/asset.model";
import { TableConstantes } from "../constantes";
import { useTableData } from "./table-data.hook";

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

describe("useTableData", () => {
  test("should return initial table data", () => {
    const assetList: Asset[] = assets;

    const { result } = renderHook(() => useTableData(assetList));

    expect(result.current.tableData).toEqual({
      header: TableConstantes.TABLE_HEADER,
      body: assetList,
    });
  });

  test("should update table data", () => {
    const assetList: Asset[] = assets;

    const { result } = renderHook(() => useTableData(assetList));

    const newAssetList: Asset[] = assets;

    act(() => {
      result.current.updateTableData();
    });

    expect(result.current.tableData).toEqual({
      header: TableConstantes.TABLE_HEADER,
      body: newAssetList,
    });
  });
});
