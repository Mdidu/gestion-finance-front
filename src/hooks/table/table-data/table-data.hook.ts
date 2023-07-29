import { useEffect, useState } from "react";
import { TableProps } from "../../../components/table/table.type";
import { Asset } from "../../../lib/models/asset/asset.model";
import { TableConstantes } from "../constantes";

export const useTableData = (assetList: Asset[]) => {
  const tableContent: TableProps = {
    header: TableConstantes.TABLE_HEADER,
    body: assetList,
  };

  const [tableData, setTableData] = useState<TableProps | null>(tableContent);

  useEffect(() => {
    updateTableData();
  }, [assetList]);

  const updateTableData = () => {
    setTableData(tableContent);
  };

  return { tableData, updateTableData };
};
