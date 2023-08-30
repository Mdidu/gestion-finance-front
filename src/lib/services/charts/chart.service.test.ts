import { describe, expect, test } from "vitest";
import { Asset } from "../../models/asset/asset.model";
import { AssetValueHistory } from "../../models/charts/chart.model";
import { ChartsService } from "./chart.service";

describe("ChartsService", () => {
  describe("generateAssetValueHistoryList", () => {
    test("should return a list of AssetValueHistory objects", () => {
      const dateString = "2023-07-29T09:22:47.967Z";
      const date = new Date(dateString);
      const assetList: Asset[] = [
        {
          id: 0,
          name: "Crypto",
          distribution: 0.5,
          valuePerPeriod: [
            { date: date, value: 1000 },
            { date: date, value: 1300 },
            { date: date, value: 5000 },
            { date: date, value: 5500 },
          ],
          totalAmount: 5500,
        },
        {
          id: 1,
          name: "Actions",
          distribution: 0.5,
          valuePerPeriod: [
            { date: date, value: 1000 },
            { date: date, value: 1800 },
            { date: date, value: 3500 },
            { date: date, value: 4500 },
          ],
          totalAmount: 4500,
        },
        {
          id: 2,
          name: "BTC",
          distribution: 0.5,
          valuePerPeriod: [
            { date: date, value: 5000 },
            { date: date, value: 9500 },
          ],
          totalAmount: 9500,
        },
      ];

      const expected: AssetValueHistory[] = [
        {
          assetName: "Crypto",
          valuePerPeriod: [
            { date: date, value: 1000 },
            { date: date, value: 1300 },
            { date: date, value: 5000 },
            { date: date, value: 5500 },
          ],
        },
        {
          assetName: "Actions",
          valuePerPeriod: [
            { date: date, value: 1000 },
            { date: date, value: 1800 },
            { date: date, value: 3500 },
            { date: date, value: 4500 },
          ],
        },
        {
          assetName: "BTC",
          valuePerPeriod: [
            { date: date, value: 5000 },
            { date: date, value: 9500 },
          ],
        },
      ];

      const result = ChartsService.generateAssetValueHistoryList(assetList);

      expect(result).toEqual(expected);
    });
  });
});
