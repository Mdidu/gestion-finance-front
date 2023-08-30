import { TableHeader } from "../../../components/table/table.type";

export const useTableHeader = (
  listeHeader: TableHeader[],
  handleSort: (columnName: string) => void
) => {
  const tableHeader = listeHeader
    ? listeHeader.map((header) => (
        <th
          key={header.hiddenName}
          className={header.hiddenName}
          onClick={() => handleSort(header.hiddenName)}
        >
          {header.name}
        </th>
      ))
    : null;

  return { tableHeader };
};
