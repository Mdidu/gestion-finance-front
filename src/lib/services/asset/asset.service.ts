import { Asset } from "../../models/asset/asset.model";
import { AssetDTO } from "../../models/dto/asset/asset.dto.model";

export class AssetService {
  constructor() {}

  public static async getAllAssetById(
    id: string | undefined
  ): Promise<Asset[]> {
    if (id === undefined) return [];
    // Externaliser la config et l'url du fetch
    const response = await (
      await fetch(`${import.meta.env.VITE_LOCALHOST}asset/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
    ).json();
    const listAssetDTO = response.assetList;

    return listAssetDTO.map((assetDTO: AssetDTO) =>
      this.mappeAssetDTOToAsset(assetDTO)
    );
  }

  public static async getAllAssetFromLastMonth(portfolioId: number) {
    const response = await (
      await fetch(
        `${import.meta.env.VITE_LOCALHOST}asset/${portfolioId}/lastMonth`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      )
    ).json();
    const listAssetDTO = response.assetList;

    return listAssetDTO.map((assetDTO: AssetDTO) =>
      this.mappeAssetDTOToAsset(assetDTO)
    );
  }

  public static async getOneAsset(portfolioId: number, assetId: number) {
    const response = await (
      await fetch(
        `${import.meta.env.VITE_LOCALHOST}asset/${portfolioId}/${assetId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      )
    ).json();
    const assetDTO = response.asset;

    return this.mappeAssetDTOToAsset(assetDTO);
  }

  public static async updateAsset(portfolioId: number, assetId: number) {
    const response = await (
      await fetch(
        `${import.meta.env.VITE_LOCALHOST}asset/${portfolioId}/${assetId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      )
    ).json();
    const assetDTO = response.asset;

    return this.mappeAssetDTOToAsset(assetDTO);
  }

  public static async deleteAsset(portfolioId: number, assetId: number) {
    const response = await (
      await fetch(
        `${import.meta.env.VITE_LOCALHOST}asset/${portfolioId}/${assetId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      )
    ).json();
    const assetDTO = response.asset;

    return this.mappeAssetDTOToAsset(assetDTO);
  }

  public static async createAsset(portfolioId: number) {
    const response = await (
      await fetch(`${import.meta.env.VITE_LOCALHOST}asset/${portfolioId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
    ).json();
    const assetDTO = response.asset;

    return this.mappeAssetDTOToAsset(assetDTO);
  }

  public static mappeAssetDTOToAsset(assetDTO: AssetDTO): Asset {
    return {
      id: assetDTO.id,
      name: assetDTO.name,
      distribution: assetDTO.distribution,
      valuePerPeriod: assetDTO.valuePerPeriod,
      totalAmount: assetDTO.totalAmount,
      amount: assetDTO.amount,
    };
  }

  public static mappeAssetToAssetDTO(asset: Asset): AssetDTO {
    return {
      id: asset.id,
      name: asset.name,
      distribution: asset.distribution,
      valuePerPeriod: asset.valuePerPeriod,
      amount: asset.amount,
      totalAmount: asset.totalAmount,
      quantity: 0,
      purchased: false,
      assetType: 0,
    };
  }
}
