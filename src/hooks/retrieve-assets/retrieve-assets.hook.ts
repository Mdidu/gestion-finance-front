import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Asset } from "../../lib/models/asset/asset.model";
import { useFetch } from "../shared/fetch";

export const useRetrieveAssets = () => {
  const [assetList, setAssetList] = useState<Asset[]>([]);
  let { id } = useParams();
  const { data, error } = useFetch<any>(
    `${import.meta.env.VITE_LOCALHOST}asset/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );

  useEffect(() => {
    if (data) setAssetList(data.assetList);
  }, [data]);
  // console.log(data, error);
  // if (error) return null;
  // if (!data) return null;
  // console.log(data);
  // if (data) return { assetList: data.assetList };
  // const fetchData = async () => {
  //   const assets = AssetService.getAllAssetById(id);
  //   assets.then((asset) => {
  //     setAssetList(asset);
  //   });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return { assetList };
};
