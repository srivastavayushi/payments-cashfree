import React, { useState } from "react";

import DataTable from "./DataTable";
import TableHeader from "./TableHeader";
import TableNav from "./TableNav";
import TableFooter from "./TableFooter";

import { data } from "../../data/static";

const DashboardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 25;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const onPrevClick = () => {
    if (currentPage !== firstIndex)
      setCurrentPage(currentPage - 1);
  };

  const onNextClick = () => {
    if (currentPage !== lastIndex)
      setCurrentPage(currentPage + 1);
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="font-medium text-xl">
        Transactions | This Month
      </div>
      <div
        className="p-3 pb-6 rounded-lg bg-white"
        style={{
          boxShadow: "0px 2px 6px 0px #1A181E0A",
        }}
      >
        <div className="flex flex-col gap-3 w-full">
          <TableNav />
          <TableHeader />
          <DataTable data={records} />
        </div>
        <TableFooter
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
          numbers={numbers}
        />
      </div>
    </div>
  );
};

export default DashboardTable;
