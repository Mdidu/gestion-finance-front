import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";

interface AssetDetailPageProps {}

const AssetDetailPage: FunctionComponent<AssetDetailPageProps> = () => {
  const { assetId, portfolioId } = useParams();
  const { data, get } = useFetch<any>(
    `${import.meta.env.VITE_LOCALHOST}asset/${portfolioId}/${assetId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    },
    []
  );

  useEffect(() => {
    get()
      .then((res) => {
        console.log(res, "rttt");
        // Utiliser res.assetList pour afficher les données
        // setAssetList(res.assetList);
      })
      .catch((err) => {
        return err;
      })
      .finally(() => console.log("finally"));
  }, []);
  console.log(assetId, portfolioId);
  return <div>Test</div>;
};

export default AssetDetailPage;
