import { renderHook } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useTableHeader } from "./table-header.hook";
import { DataItem, TableHeader } from "../../../components/table/table.type";
import { useTableBody } from "../table-body/table-body.hook";

const mockTableHeader: TableHeader[] = [
  { name: "Actifs", hiddenName: "actifName" },
  { name: "Répartition", hiddenName: "distribution" },
  { name: "Valeur", hiddenName: "value" },
];
const mockArrayDataItem: DataItem[] = [
  { name: "Crypto", distribution: 55, value: 5500 },
  { name: "Actions", distribution: 45, value: 4500 },
];

// Use vitest to test the hook useTableHeader
describe("useTableHeader", () => {
  test("Retourne un tableHeader non vide", async () => {
    const resultTableBody = renderHook(() => useTableBody(mockArrayDataItem));
    const result = renderHook(() =>
      useTableHeader(mockTableHeader, resultTableBody.result.current.handleSort)
    );
    expect(result.result.current.tableHeader).toBeTruthy();
  });
});
