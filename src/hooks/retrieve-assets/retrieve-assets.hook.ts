import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Asset } from "../../lib/models/asset/asset.model";
import { AssetService } from "../../lib/services/asset/asset.service";

export const useRetrieveAssets = () => {
  const [assetList, setAssetList] = useState<Asset[]>([]);
  let { id } = useParams();
  const fetchData = async () => {
    const assets = AssetService.getAllAssetById(id);
    assets.then((asset) => {
      setAssetList(asset);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { assetList };
};
