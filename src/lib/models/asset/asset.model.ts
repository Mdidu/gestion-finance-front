import { z } from "zod";

export const AssetScheme = z.object({
  id: z.number().optional(),
  name: z.string(),
  distribution: z.number(),
  assetType: z.number(),
  valuePerPeriod: z.array(
    z.object({
      date: z.string(),
      value: z.number(),
      totalAmount: z.number(),
      topBuy: z.string(),
      quantity: z.number(),
      id: z.number(),
    })
  ),
  totalAmount: z.number(),
  amount: z.number(),
});

export const AssetTypeScheme = z.object({
  id: z.number(),
  name: z.string(),
});

export type AssetResponse = { asset: Asset };
export type AssetListResponse = { assetList: Asset[] };

/** Exportable type */
export type Asset = z.infer<typeof AssetScheme>;
export type AssetType = z.infer<typeof AssetTypeScheme>;
