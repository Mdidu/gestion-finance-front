import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useTableData } from "./table-data.hook";

describe("useTableData", () => {
  test("should return initial table data", () => {
    const { result } = renderHook(() => useTableData());

    expect(result.current.tableData).toEqual({
      header: [
        { name: "Actifs", hiddenName: "assetName" },
        { name: "Répartition", hiddenName: "distribution" },
        { name: "Valeur", hiddenName: "value" },
      ],
      body: [
        { name: "Crypto", distribution: 55, value: 5500 },
        { name: "Actions", distribution: 45, value: 4500 },
      ],
    });
  });

  test("should update table data", () => {
    const { result } = renderHook(() => useTableData());

    act(() => {
      result.current.updateTableData();
    });

    expect(result.current.tableData).toEqual({
      header: [
        { name: "Actifs", hiddenName: "assetName" },
        { name: "Répartition", hiddenName: "distribution" },
        { name: "Valeur", hiddenName: "value" },
      ],
      body: [
        { name: "Crypto", distribution: 55, value: 5500 },
        { name: "Actions", distribution: 45, value: 4500 },
      ],
    });
  });
});
