import { useState } from "react";
import { TableHeader, TableProps } from "../../../components/table/table.type";

const TableHeader: TableHeader[] = [
  { name: "Actifs", hiddenName: "assetName" },
  { name: "Répartition", hiddenName: "distribution" },
  { name: "Valeur", hiddenName: "value" },
];

export const useTableData = () => {
  // Le mock sera remplacé par des données récupéré dans la db
  const mockValeurPourAlimenterArray: TableProps = {
    header: TableHeader,
    body: [
      { name: "Crypto", distribution: 55, value: 5500 },
      { name: "Actions", distribution: 45, value: 4500 },
    ],
  };

  const [tableData, setTableData] = useState<TableProps | null>(
    mockValeurPourAlimenterArray
  );

  const updateTableData = () => {
    setTableData(mockValeurPourAlimenterArray);
  };

  return { tableData, updateTableData };
};
