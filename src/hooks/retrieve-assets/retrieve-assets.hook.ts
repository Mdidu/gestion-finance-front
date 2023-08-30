import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import { Asset, AssetListResponse } from "../../lib/models/asset/asset.model";

export const useRetrieveAssets = () => {
  const [assetList, setAssetList] = useState<Asset[]>([]);
  let { id } = useParams();
  const { data, get } = useFetch<AssetListResponse>(
    `${import.meta.env.VITE_LOCALHOST}asset/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    },
    []
  );

  useEffect(() => {
    get("")
      .then((res) => {
        setAssetList(res.assetList);
      })
      .catch((err) => {
        return err;
      })
      .finally(() => console.log("finally"));
  }, []);

  useEffect(() => {
    if (data) setAssetList(data.assetList);
  }, [data]);

  return { assetList, setAssetList };
};
