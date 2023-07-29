import { Asset } from "../../models/asset/asset.model";
import { AssetDTO } from "../../models/dto/asset/asset.dto.model";

export class AssetService {
  constructor() {}

  public static async getAllAssetById(
    id: string | undefined
  ): Promise<Asset[]> {
    if (id === undefined) return [];

    const response = await (
      await fetch(`${import.meta.env.VITE_LOCALHOST}asset/${id}`)
    ).json();
    const listAssetDTO = response.assetList;

    return listAssetDTO.map((assetDTO: AssetDTO) =>
      this.mappeAssetDTOToAsset(assetDTO)
    );
  }

  public static mappeAssetDTOToAsset(assetDTO: AssetDTO): Asset {
    return {
      id: assetDTO.id,
      name: assetDTO.name,
      distribution: assetDTO.distribution,
      valuePerPeriod: assetDTO.valuePerPeriod,
      totalAmount: assetDTO.totalAmount,
    };
  }

  public static mappeAssetToAssetDTO(asset: Asset): AssetDTO {
    return {
      id: asset.id,
      name: asset.name,
      distribution: asset.distribution,
      valuePerPeriod: asset.valuePerPeriod,
      totalAmount: asset.totalAmount,
    };
  }
}
