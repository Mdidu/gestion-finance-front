import { act, render, renderHook, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useTableBody } from "./table-body.hook";
import { DataItem } from "../../../components/table/table.type";

const mockArrayDataItem: DataItem[] = [
  { name: "Crypto", distribution: 55, value: 5500 },
  { name: "Actions", distribution: 45, value: 4500 },
];

describe("useTableBody", () => {
  test("Retourne un tableBody non vide et une function handleSort", async () => {
    const result = renderHook(() => useTableBody(mockArrayDataItem));

    expect(
      result.result.current.tableBody &&
        result.result.current.tableBody?.length > 0
    ).toBeTruthy();
    expect(result.result.current.handleSort).toBeInstanceOf(Function);
  });
  test("Retourne un tableBody trié par ordre croissant", async () => {
    const result = renderHook(() => useTableBody(mockArrayDataItem));
    act(() => {
      result.result.current.handleSort("name");
      result.result.current.handleSort("name");
    });
    render(
      <tr>
        <td>Actions</td>
        <td>45 %</td>
        <td>4500 €</td>
      </tr>
    );
    const label = screen.getByText("Actions");
    const percentage = screen.getByText("45 %");
    const value = screen.getByText("4500 €");
    expect(label).toBeInTheDocument();
    expect(percentage).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
  test("Retourne un tableBody trié par ordre décroissant", async () => {
    const result = renderHook(() => useTableBody(mockArrayDataItem));
    act(() => {
      result.result.current.handleSort("name");
      result.result.current.handleSort("name");
    });
    render(
      <tr>
        <td>Crypto</td>
        <td>55 %</td>
        <td>5500 €</td>
      </tr>
    );
    const label = screen.getByText("Crypto");
    const percentage = screen.getByText("55 %");
    const value = screen.getByText("5500 €");
    expect(label).toBeInTheDocument();
    expect(percentage).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
