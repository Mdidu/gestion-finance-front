import React, { useEffect } from "react";
import "./modal-asset.component.css";
import { Asset, AssetType } from "../../lib/models/asset/asset.model";
import ReactDOM from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAllTypeAssets } from "../../hooks/all-type-asset/all-type-asset.hook";
import { z } from "zod";
import { Constante } from "../../lib/shared/constante";

interface AssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAsset?: (asset: AssetModalForm) => void;
  onUpdateAsset?: (asset: AssetModalForm) => void;
  asset?: Partial<Asset>;
}
const AssetModalFormScheme = z.object({
  id: z.number().optional(),
  name: z.string().nonempty({ message: Constante.FORM_ERROR_MESSAGE.REQUIRED }),
  date: z.string().nonempty({ message: Constante.FORM_ERROR_MESSAGE.REQUIRED }),
  quantity: z
    .number()
    .min(0, { message: Constante.FORM_ERROR_MESSAGE.REQUIRED }),
  amount: z.number().min(0, { message: Constante.FORM_ERROR_MESSAGE.REQUIRED }),
  typeOperation: z
    .string()
    .nonempty({ message: Constante.FORM_ERROR_MESSAGE.REQUIRED }),
  assetType: z
    .number()
    .min(0, { message: Constante.FORM_ERROR_MESSAGE.REQUIRED }),
});
export type AssetModalForm = z.infer<typeof AssetModalFormScheme>;

const ModalAsset: React.FC<AssetModalProps> = ({
  isOpen,
  onClose,
  onAddAsset,
  onUpdateAsset,
  asset,
}: AssetModalProps) => {
  const today = new Date().toISOString().slice(0, 10);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AssetModalForm>();
  const { assetTypeList } = useAllTypeAssets();

  useEffect(() => {
    const operationType =
      asset?.valuePerPeriod?.[0]?.topBuy === Constante.CODE_OPERATION_TYPE.BUY
        ? Constante.NOM_OPERATION_TYPE.BUY
        : Constante.NOM_OPERATION_TYPE.SELL;
    reset({
      id: asset?.valuePerPeriod?.[0].id ? asset?.valuePerPeriod?.[0].id : -1,
      name: asset?.name ? asset.name : "",
      date: asset?.valuePerPeriod?.[0]?.date
        ? asset.valuePerPeriod[0].date
        : today,
      quantity: asset?.valuePerPeriod?.[0]?.quantity
        ? asset.valuePerPeriod[0].quantity
        : 0,
      amount: asset?.valuePerPeriod?.[0]?.value
        ? asset.valuePerPeriod[0].value
        : 0,
      typeOperation: asset?.valuePerPeriod?.[0]?.topBuy ? operationType : "",
      assetType: asset?.assetType ? asset.assetType : 0,
    });
  }, [asset]);

  const onSubmit: SubmitHandler<AssetModalForm> = (data: AssetModalForm) => {
    const newAsset: AssetModalForm = {
      id: data.id,
      name: data.name,
      date: data.date,
      amount: +data.amount,
      quantity: +data.quantity,
      assetType: data.assetType,
      typeOperation: data.typeOperation,
    };
    if (onAddAsset) onAddAsset(newAsset);
    if (onUpdateAsset) onUpdateAsset(newAsset);
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
                <input type="hidden" id="id" {...register("id")} />
                {errors.name && (
                  <span className="error-message">
                    {errors.name.message?.toString()}
                  </span>
                )}
              </div>

              <div className="form__group">
                <label htmlFor="name" className="form_group__label">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: Constante.FORM_ERROR_MESSAGE.REQUIRED,
                  })}
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
                  {...register("date", {
                    required: Constante.FORM_ERROR_MESSAGE.REQUIRED,
                  })}
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
                  {...register("quantity", {
                    required: Constante.FORM_ERROR_MESSAGE.REQUIRED,
                  })}
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
                  {...register("amount", {
                    required: Constante.FORM_ERROR_MESSAGE.REQUIRED,
                  })}
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
                        value={Constante.NOM_OPERATION_TYPE.BUY}
                        {...register("typeOperation", {
                          required: Constante.FORM_ERROR_MESSAGE.REQUIRED,
                        })}
                      />
                    </span>
                  </label>
                  <label>
                    <span className="input__radio">
                      <span className="input__radio__label">Vendu</span>
                      <input
                        type="radio"
                        value={Constante.NOM_OPERATION_TYPE.SELL}
                        {...register("typeOperation", {
                          required: Constante.FORM_ERROR_MESSAGE.REQUIRED,
                        })}
                      />
                    </span>
                  </label>
                </div>
                {errors.typeOperation && (
                  <span className="error-message">
                    {errors.typeOperation.message?.toString()}
                  </span>
                )}
              </div>
              <div className="form__group">
                <label className="form_group__label">Type d'asset</label>
                <select
                  {...register("assetType", {
                    required: Constante.FORM_ERROR_MESSAGE.REQUIRED,
                  })}
                >
                  <option value="">Sélectionnez un type d'asset</option>
                  {assetTypeList?.map((type: AssetType) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                {errors.assetType && (
                  <span className="error-message">
                    {errors.assetType.message?.toString()}
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
