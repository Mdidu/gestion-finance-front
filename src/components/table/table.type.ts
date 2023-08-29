import { z } from "zod";
import { AssetScheme } from "../../lib/models/asset/asset.model";

/** Type Définition with ZOD */
const TableHeaderScheme = z.object({
  name: z.string(),
  hiddenName: z.string(),
});
const TablePropsScheme = z.object({
  header: z.array(TableHeaderScheme),
  body: z.array(AssetScheme),
  handleOpenModal: z.function(z.tuple([]), z.void()),
});
const SortOrderNullableScheme = z
  .union([z.literal("asc"), z.literal("desc")])
  .nullable();

/**
 * Exportable Type
 */
export type TableHeader = z.infer<typeof TableHeaderScheme>;
export type TableProps = z.infer<typeof TablePropsScheme>;
export type SortOrderNullable = z.infer<typeof SortOrderNullableScheme>;
