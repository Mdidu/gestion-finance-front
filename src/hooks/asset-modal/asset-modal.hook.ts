import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import { AssetModalForm } from "../../components/modale-asset/modal-asset.component";
import { Asset, AssetListResponse } from "../../lib/models/asset/asset.model";

export const useAssetModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);
  const { portfolioId, id } = useParams();
  const { post } = useFetch<AssetListResponse>(
    `${import.meta.env.VITE_LOCALHOST}asset/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
  const { put } = useFetch<AssetListResponse>(
    `${import.meta.env.VITE_LOCALHOST}asset/${portfolioId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddAsset = async (asset: AssetModalForm) => {
    const res = await post("", asset);
    if (res) setAssets([...res.assetList]);
  };

  const handleUpdateAsset = async (asset: AssetModalForm) => {
    const res = await put(`/${asset.id}`, asset);
    if (res) setAssets([...res.assetList]);
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleAddAsset,
    handleUpdateAsset,
    assets,
  };
};
