import React from "react";
import "./modal-asset.component.css";
import { Asset, AssetType } from "../../lib/models/asset/asset.model";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useAllTypeAssets } from "../../hooks/all-type-asset/all-type-asset.hook";

interface AssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAsset: (asset: Asset) => void;
}

const ModalAsset: React.FC<AssetModalProps> = ({
  isOpen,
  onClose,
  onAddAsset,
}: AssetModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { assetTypeList } = useAllTypeAssets();
  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (data: any) => {
    /** @type {*} */
    const newAsset: any = {
      // id: -1,
      name: data.name,
      date: data.date,
      amount: +data.amount,
      quantity: +data.quantity,
      assetType: data.type,
      typeOperation: data.typeOperation,
    };
    onAddAsset(newAsset);
    onClose();
  };

  const modal = (
    <>
      {isOpen && (
        <div className="modal__overlay" onClick={onClose}>
          <div
            className="modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <h2>Ajouter un actif</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form__group">
                <label htmlFor="name" className="form_group__label">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Ce champ est requis" })}
                />
                {errors.name && (
                  <span className="error-message">
                    {errors.name.message?.toString()}
                  </span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="date" className="form_group__label">
                  Date opération
                </label>
                <input
                  type="date"
                  id="date"
                  defaultValue={today}
                  {...register("date", { required: "Ce champ est requis" })}
                />
                {errors.date && (
                  <span className="error-message">
                    {errors.date.message?.toString()}
                  </span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="quantity" className="form_group__label">
                  Quantité
                </label>
                <input
                  type="number"
                  id="quantity"
                  step="0.01"
                  {...register("quantity", { required: "Ce champ est requis" })}
                />
                {errors.quantity && (
                  <span className="error-message">
                    {errors.quantity.message?.toString()}
                  </span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="amount" className="form_group__label">
                  Montant total
                </label>
                <input
                  type="number"
                  id="amount"
                  step="0.01"
                  {...register("amount", { required: "Ce champ est requis" })}
                />
                {errors.amount && (
                  <span className="error-message">
                    {errors.amount.message?.toString()}
                  </span>
                )}
              </div>
              <div className="form__group">
                <label className="form_group__label">Type d'opération</label>
                <div>
                  <label>
                    <span className="input__radio">
                      <span className="input__radio__label">Acheté</span>
                      <input
                        type="radio"
                        value="buy"
                        {...register("typeOperation", {
                          required: "Ce champ est requis",
                        })}
                      />
                    </span>
                  </label>
                  <label>
                    <span className="input__radio">
                      <span className="input__radio__label">Vendu</span>
                      <input
                        type="radio"
                        value="sell"
                        {...register("typeOperation", {
                          required: "Ce champ est requis",
                        })}
                      />
                    </span>
                  </label>
                </div>
                {errors.type && (
                  <span className="error-message">
                    {errors.type.message?.toString()}
                  </span>
                )}
              </div>
              {/* TODO Récupéré les datas depuis le backend */}
              <div className="form__group">
                <label className="form_group__label">Type d'asset</label>
                <select
                  {...register("type", { required: "Ce champ est requis" })}
                >
                  <option value="">Sélectionnez un type d'asset</option>
                  {assetTypeList?.map((type: AssetType) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                {errors.type && (
                  <span className="error-message">
                    {errors.type.message?.toString()}
                  </span>
                )}
              </div>
              <div className="modal__buttons">
                <button type="submit" className="button">
                  Ajouter
                </button>
                <button type="button" onClick={onClose} className="button">
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );

  return ReactDOM.createPortal(modal, document.body);
};

export default ModalAsset;
