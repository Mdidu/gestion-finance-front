import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import { Asset, AssetListResponse } from "../../lib/models/asset/asset.model";
import "./asset-detail.component.css";
import AssetModal from "../../components/modale-asset/modal-asset.component";
import { useAssetModal } from "../../hooks/asset-modal/asset-modal.hook";
import { UpdateIcon } from "../../assets/update-icon/update-icon";
import { DeleteIcon } from "../../assets/delete-icon/delete-icon";
import { Constante } from "../../lib/shared/constante";
import { formatDateToDayMonthYear } from "../../utils/date/format-date";

interface AssetDetailPageProps {}

const AssetDetailPage: FunctionComponent<AssetDetailPageProps> = () => {
  const [asset, setAsset] = useState<Asset[]>([]);
  const [assetToForm, setAssetToForm] = useState<Partial<Asset>>({});
  const { assetName, portfolioId } = useParams();
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleUpdateAsset,
    assets,
  } = useAssetModal();
  const { get } = useFetch<AssetListResponse>(
    `${import.meta.env.VITE_LOCALHOST}asset/${portfolioId}/${assetName}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    },
    []
  );
  const { del } = useFetch<AssetListResponse>(
    `${import.meta.env.VITE_LOCALHOST}asset/${portfolioId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    },
    []
  );

  useEffect(() => {
    if (assets && assets.length > 0) setAsset([...assets]);
  }, [assets]);

  const handleUpdate = (i: number) => {
    setAssetToForm({
      name: asset[0]?.name,
      valuePerPeriod: [asset[0]?.valuePerPeriod[i]],
      assetType: asset[0]?.assetType,
    });
  };

  const handleDeleteAsset = async (i: number) => {
    const assetId = asset[0]?.valuePerPeriod[i].id;
    const assetName = asset[0]?.name;
    const res = await del(`/${assetId}/${assetName}`);
    if (res) setAsset([...res.assetList]);
  };

  useEffect(() => {
    get()
      .then((res) => {
        setAsset(res.assetList);
      })
      .catch((err) => {
        return err;
      })
      .finally(() => console.log("finally"));
  }, []);

  useEffect(() => {
    if (assetToForm?.name) handleOpenModal();
  }, [assetToForm]);

  const tableBody = asset?.[0]?.valuePerPeriod.map((item, i) => {
    return (
      <tr
        key={i}
        className={
          item.topBuy === Constante.CODE_OPERATION_TYPE.BUY
            ? Constante.NOM_OPERATION_TYPE.BUY
            : Constante.NOM_OPERATION_TYPE.SELL
        }
      >
        <td>{formatDateToDayMonthYear(item.date)}</td>
        <td>{item.value} €</td>
        <td>{item.totalAmount} €</td>
        <td>
          <span onClick={() => handleUpdate(i)}>
            <UpdateIcon />
          </span>
          <span onClick={() => handleDeleteAsset(i)}>
            <DeleteIcon />
          </span>
        </td>
      </tr>
    );
  });

  if (!asset) return <div>Pas de données</div>;
  return (
    <div>
      <h1 className="horizontal__center-align asset-detail__title">
        {asset[0]?.name}
      </h1>
      <div className="horizontal__center-align">
        <div>
          <table className="table asset-detail__table">
            <thead className="asset-detail__thead">
              <tr>
                <th>Date opération</th>
                <th>Montant opération</th>
                <th>Montant total après opération</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="asset-detail__tbody">{tableBody}</tbody>
          </table>
        </div>
      </div>
      <AssetModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onUpdateAsset={handleUpdateAsset}
        asset={assetToForm}
      />
    </div>
  );
};

export default AssetDetailPage;
