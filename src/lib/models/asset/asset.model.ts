import { z } from "zod";

export const AssetScheme = z.object({
  id: z.number().optional(),
  name: z.string(),
  distribution: z.number(),
  valuePerPeriod: z.array(
    z.object({
      date: z.date(),
      value: z.number(),
      totalAmount: z.number(),
      topBuy: z.string(),
    })
  ),
  totalAmount: z.number(),
  amount: z.number(),
});

export const AssetTypeScheme = z.object({
  id: z.number(),
  name: z.string(),
});

/** Exportable type */
export type Asset = z.infer<typeof AssetScheme>;
export type AssetType = z.infer<typeof AssetTypeScheme>;
