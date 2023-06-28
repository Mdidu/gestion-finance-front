import { act, render, renderHook } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Table from "./table.component";
import { useData } from "../../pages/portfolio-view/portolio-view.component";

describe("Table", () => {
  test("Test Table component inputs", () => {
    let data = null;
    const result = renderHook(() => useData());
    if (result.result.current.data) {
      data = result.result.current.data;
      render(<Table {...data} />);
    }
    expect(data?.body).toBeTruthy();
    expect(data?.header).toBeTruthy();
  });

  test("Test Table component outputs", () => {
    let data = null;
    const result = renderHook(() => useData());

    if (result.result.current.data) {
      data = result.result.current.data;
      const { getAllByText } = render(<Table {...data} />);
      act(() => {
        result.result.current.updateData();
      });
      expect(getAllByText("Crypto")).toBeTruthy();
    }
  });
});
