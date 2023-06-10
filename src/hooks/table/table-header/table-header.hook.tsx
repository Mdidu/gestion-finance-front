import { TableHeader } from "../../../components/table/table.type";

export const useTableHeader = (
  header: TableHeader[],
  handleSort: (columnName: string) => void
) => {
  const tableHeader = header
    ? header.map((h) => (
        <th onClick={() => handleSort(h.hiddenName)}>{h.name}</th>
      ))
    : null;

  return { tableHeader };
};
