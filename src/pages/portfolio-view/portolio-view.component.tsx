import { FunctionComponent, useState } from "react";
import Table from "../../components/table/table.component";
import { TableHeader, TableProps } from "../../components/table/table.type";

interface PortfolioViewPageProps {}

const TableaHeader: TableHeader[] = [
  { name: "Actifs", hiddenName: "name" },
  { name: "Répartition", hiddenName: "distribution" },
  { name: "Valeur", hiddenName: "value" },
];

const useData = () => {
  // Le mock sera remplacé par des données récupéré dans la db
  const mockValeurPourAlimenterArray: TableProps = {
    header: TableaHeader,
    body: [
      { name: "Crypto", distribution: 55, value: 5500 },
      { name: "Actions", distribution: 45, value: 4500 },
    ],
  };

  const [data, setData] = useState<TableProps | null>(
    mockValeurPourAlimenterArray
  );

  const updateData = () => {
    setData(mockValeurPourAlimenterArray);
  };

  return { data, updateData };
};

const PortfolioViewPage: FunctionComponent<PortfolioViewPageProps> = () => {
  const { data } = useData();

  return <div>{data ? <Table {...data} /> : null}</div>;
};

export default PortfolioViewPage;
