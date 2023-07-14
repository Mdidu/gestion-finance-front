import { z } from "zod";

/** Type Définition with ZOD */
const AssetValueHistoryScheme = z.object({
  assetName: z.string(),
  valuePerPeriod: z.array(
    z.object({
      date: z.date(),
      value: z.number(),
    })
  ),
});
const LineChartDataScheme = z.object({
  labels: z.array(z.string()),
  datasets: z.array(
    z.object({
      label: z.string(),
      data: z.array(z.number()),
      borderColor: z.string(),
      backgroundColor: z.string(),
    })
  ),
});
const LineChartOptionsScheme = z.object({
  responsive: z.boolean(),
  plugins: z.object({
    legend: z.object({
      position: z.literal("top"),
    }),
    title: z.object({
      display: z.boolean(),
      text: z.string(),
    }),
  }),
});
const DoughnutChartDatasetScheme = z.object({
  label: z.string(),
  data: z.array(z.number()),
  backgroundColor: z.array(z.string()),
  borderColor: z.array(z.string()),
  borderWidth: z.number(),
});
const DoughnutChartDataScheme = z.object({
  labels: z.array(z.string()),
  datasets: z.array(DoughnutChartDatasetScheme),
});

/**
 * Exportable Type
 */
export type LineChartData = z.infer<typeof LineChartDataScheme>;
export type LineChartOptions = z.infer<typeof LineChartOptionsScheme>;
export type AssetValueHistory = z.infer<typeof AssetValueHistoryScheme>;
export type DoughnutChartData = z.infer<typeof DoughnutChartDataScheme>;
export type DoughnutChartDataset = z.infer<typeof DoughnutChartDatasetScheme>;
