import { Asset } from "../../models/asset/asset.model";
import { AssetValueHistory } from "../../models/charts/chart.model";

export class ChartsService {
  constructor() {}

  public static generateAssetValueHistoryList(
    assetList: Asset[]
  ): AssetValueHistory[] {
    return assetList.map((asset) => this.mappeAssetToAssetValueHistory(asset));
  }

  public static mappeAssetToAssetValueHistory(asset: Asset): AssetValueHistory {
    return {
      assetName: asset.name,
      valuePerPeriod: asset.valuePerPeriod,
    };
  }
}
