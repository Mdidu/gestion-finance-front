import { useState } from "react";
import useFetch from "use-http";

export const useAssetModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assets, setAssets] = useState<any>(null);
  // Deux useFetch pour séparer post et put ?
  const { post } = useFetch<any>(`${import.meta.env.VITE_LOCALHOST}asset/1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddAsset = async (asset: any) => {
    const res = await post("", asset);
    if (res) setAssets([...res.assetList]);
  };

  const handleUpdateAsset = async (asset: any) => {
    // A modifier pour gérer le PUT
    // const res = await post("", asset);
    // if (res) setAssets([...res.assetList]);
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
