import { act, render, renderHook } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Table from "./table.component";
import { useTableData } from "../../hooks/table/table-data/table-data.hook";

describe("Table", () => {
  test("Test Table component inputs", () => {
    let data = null;
    const result = renderHook(() => useTableData());
    if (result.result.current.tableData) {
      data = result.result.current.tableData;
      render(<Table {...data} />);
    }
    expect(data?.body).toBeTruthy();
    expect(data?.header).toBeTruthy();
  });

  test("Test Table component outputs", () => {
    let data = null;
    const result = renderHook(() => useTableData());

    if (result.result.current.tableData) {
      data = result.result.current.tableData;
      const { getAllByText } = render(<Table {...data} />);
      act(() => {
        result.result.current.updateTableData();
      });
      expect(getAllByText("Crypto")).toBeTruthy();
    }
  });
});
