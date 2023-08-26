import { z } from "zod";

const AssetDTOScheme = z.object({
  id: z.number().optional(),
  name: z.string(),
  distribution: z.number(),
  quantity: z.number(),
  valuePerPeriod: z.array(
    z.object({
      date: z.date(),
      value: z.number(),
      totalAmount: z.number(),
      topBuy: z.string(),
    })
  ),
  amount: z.number(),
  totalAmount: z.number(),
  purchased: z.boolean(),
  assetType: z.number(),
});

/** Exportable type */
export type AssetDTO = z.infer<typeof AssetDTOScheme>;
