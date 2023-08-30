import useFetch from "use-http";
import { AssetType } from "../../lib/models/asset/asset.model";

export const useAllTypeAssets = () => {
  const { data: assetTypeList, error } = useFetch<AssetType[]>(
    `${import.meta.env.VITE_LOCALHOST}asset/types`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    },
    []
  );

  return { assetTypeList, error };
};
