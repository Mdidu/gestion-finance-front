import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useRetrieveAssets } from "./retrieve-assets.hook";

describe("useRetrieveAssets", () => {
  test("should return a list of assets", async () => {
    const { result } = renderHook(() => useRetrieveAssets());

    expect(result.current.assetList).toEqual([]);
  });
});
