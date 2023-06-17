import { useState } from "react";
import { ASC, DESC } from "../../../components/table/constantes";
import {
  DataItem,
  SortOrderNullable,
} from "../../../components/table/table.type";

export const useTableBody = (body: DataItem[]) => {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrderNullable>(null);

  const handleSort = (columnName: string) => {
    if (columnName === sortedColumn) {
      setSortOrder(sortOrder === ASC ? DESC : ASC);
    } else {
      setSortedColumn(columnName);
      setSortOrder(ASC);
    }
  };

  const sortedData = sortedColumn
    ? body.sort((a, b) => {
        const valueA = a[sortedColumn as keyof DataItem];
        const valueB = b[sortedColumn as keyof DataItem];
        if (valueA < valueB) {
          return sortOrder === ASC ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortOrder === ASC ? 1 : -1;
        }
        return 0;
      })
    : body;

  const tableBody = sortedData
    ? sortedData.map((item: DataItem, index: number) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.distribution} %</td>
          <td>{item.value} €</td>
        </tr>
      ))
    : null;

  return { tableBody, handleSort };
};
