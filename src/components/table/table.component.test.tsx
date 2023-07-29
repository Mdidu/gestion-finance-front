import { act, render, renderHook } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Table from "./table.component";
import { useTableData } from "../../hooks/table/table-data/table-data.hook";
import { Asset } from "../../lib/models/asset/asset.model";

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

describe("Table", () => {
  test("Test Table component inputs", () => {
    const assetList: Asset[] = assets;
    let data = null;
    const result = renderHook(() => useTableData(assetList));
    if (result.result.current.tableData) {
      data = result.result.current.tableData;
      render(<Table {...data} />);
    }
    expect(data?.body).toBeTruthy();
    expect(data?.header).toBeTruthy();
  });

  test("Test Table component outputs", () => {
    const assetList: Asset[] = assets;
    let data = null;
    const result = renderHook(() => useTableData(assetList));

    if (result.result.current.tableData) {
      data = result.result.current.tableData;
      const { getAllByText } = render(<Table {...data} />);
      act(() => {
        result.result.current.updateTableData();
      });
      expect(getAllByText("Bitcoin")).toBeTruthy();
    }
  });
});
