import React from "react";
import { TableProps } from "./table.type";
import { useTableHeader } from "../../hooks/table/table-header/table-header.hook";
import { useTableBody } from "../../hooks/table/table-body/table-body.hook";

const Table: React.FC<TableProps> = ({ body, header }: TableProps) => {
  const { tableBody, handleSort } = useTableBody(body);
  const { tableHeader } = useTableHeader(header, handleSort);

  return (
    <table className="table">
      <thead>
        <tr>{tableHeader}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};

export default Table;
