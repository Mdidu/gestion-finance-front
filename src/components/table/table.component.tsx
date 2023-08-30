import React from "react";
import "./table.component.css";
import { TableProps } from "./table.type";
import { useTableHeader } from "../../hooks/table/table-header/table-header.hook";
import { useTableBody } from "../../hooks/table/table-body/table-body.hook";

const Table: React.FC<TableProps> = ({
  body,
  header,
  handleOpenModal,
}: TableProps) => {
  const { tableBody, handleSort } = useTableBody(body);
  const { tableHeader } = useTableHeader(header, handleSort);

  return (
    <div className="container__table">
      <table className="table">
        <thead>
          <tr>{tableHeader}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
      <button className="button" onClick={handleOpenModal}>
        Ajouter un actif
      </button>
    </div>
  );
};

export default Table;
