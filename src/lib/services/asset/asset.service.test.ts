import { describe, expect, test, vi } from "vitest";
import { Asset } from "../../models/asset/asset.model";
import { AssetDTO } from "../../models/dto/asset/asset.dto.model";
import { AssetService } from "./asset.service";

const dateString = "2023-07-29T09:22:47.967Z";
const date = new Date(dateString);
const listAssetDTO: AssetDTO[] = [
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
const listAsset: Asset[] = [
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
describe("AssetService", () => {
  describe("getAllAssetById", () => {
    test("should return empty array if id is undefined", async () => {
      const result = await AssetService.getAllAssetById(undefined);

      expect(result).toEqual([]);
    });

    test("should return list of assets if id is defined", async () => {
      const id = "123";

      const spy = vi.spyOn(AssetService, "getAllAssetById");

      const result = await AssetService.getAllAssetById(id);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("mappeAssetDTOToAsset", () => {
    test("should map asset DTO to asset", () => {
      const result = listAssetDTO.map((assetDTO: AssetDTO) =>
        AssetService.mappeAssetDTOToAsset(assetDTO)
      );

      expect(result).toEqual(listAsset);
    });
  });

  describe("mappeAssetToAssetDTO", () => {
    test("should map asset to asset DTO", () => {
      const result = listAsset.map((asset: Asset) =>
        AssetService.mappeAssetToAssetDTO(asset)
      );

      expect(result).toEqual(listAssetDTO);
    });
  });
});
