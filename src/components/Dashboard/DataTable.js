import React from "react";
import DataRow from "./DataRow";

const DataTable = ({ data }) => {
  return data.map((transaction) => (
    <DataRow
      transaction={transaction}
      key={transaction.orderId}
    />
  ));
};

export default DataTable;
