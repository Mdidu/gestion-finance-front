import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ChartsConstantes } from "../constantes";
import { useDataForDoughnutChart } from "./data-doughnut-chart.hook";

describe("useDataForDoughnutChart", () => {
  test("should return initial doughnut chart data", () => {
    const { result } = renderHook(() => useDataForDoughnutChart());

    expect(result.current.doughnutAssets).toEqual({
      labels: ["Crypto", "Actions", "Immobilier", "Livret"],
      datasets: [
        {
          label: ChartsConstantes.DOUGHNUT_DATASET_LABEL,
          data: [5, 5, 5, 5],
          backgroundColor: [
            "rgb(255, 0, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 0, 255)",
            "rgb(255, 255, 0)",
          ],
          borderColor: [
            "rgb(255, 0, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 0, 255)",
            "rgb(255, 255, 0)",
          ],
          borderWidth: 1,
        },
      ],
    });
  });

  test("should update doughnut chart data", () => {
    const { result } = renderHook(() => useDataForDoughnutChart());

    act(() => {
      result.current.updateDoughnutAssets();
    });

    expect(result.current.doughnutAssets).toEqual({
      labels: ["Crypto", "Actions", "Immobilier", "Livret"],
      datasets: [
        {
          label: ChartsConstantes.DOUGHNUT_DATASET_LABEL,
          data: [5, 5, 5, 5],
          backgroundColor: [
            "rgb(255, 0, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 0, 255)",
            "rgb(255, 255, 0)",
          ],
          borderColor: [
            "rgb(255, 0, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 0, 255)",
            "rgb(255, 255, 0)",
          ],
          borderWidth: 1,
        },
      ],
    });
  });
});
