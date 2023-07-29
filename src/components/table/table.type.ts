import { z } from "zod";
import { AssetScheme } from "../../lib/models/asset/asset.model";

/** Type Définition with ZOD */
// DataItemScheme, potentiellement à déplacer dans un de model global, car on a le même type côté back
// const DataItemScheme = z.object({
//   id: z.number().optional(),
//   name: z.string(),
//   distribution: z.number(),
//   value: z.number(),
// });
const TableHeaderScheme = z.object({
  name: z.string(),
  hiddenName: z.string(),
});
const TablePropsScheme = z.object({
  header: z.array(TableHeaderScheme),
  body: z.array(AssetScheme),
});
const SortOrderNullableScheme = z
  .union([z.literal("asc"), z.literal("desc")])
  .nullable();

/**
 * Exportable Type
 */
// export type DataItem = z.infer<typeof DataItemScheme>;
export type TableHeader = z.infer<typeof TableHeaderScheme>;
export type TableProps = z.infer<typeof TablePropsScheme>;
export type SortOrderNullable = z.infer<typeof SortOrderNullableScheme>;
