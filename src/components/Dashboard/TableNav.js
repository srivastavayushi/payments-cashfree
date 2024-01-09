import React from "react";

import Sort from "../../svgs/Vector.svg";
import Download from "../../svgs/CombinedShape.svg";
import Search from "../../svgs/Search.svg";

const TableNav = () => {
  return (
    <div className="flex flex-row justify-between ">
      <div className="h-[40px] border-[1px] rounded w-[248px] px-2.5 py-2.5 flex gap-[8px] text-[14px]">
        <img src={Search} alt="Search" />
        <input
          placeholder="Search by Order ID..."
          className="w-full h-full outline-none"
        />
      </div>

      <div className="flex flex-row gap-[12px]">
        <button className="flex flex-row border-[1px] rounded gap-[6px] items-center justify-center px-[12px] py-[6px]">
          <span className="text-[#4D4D4D]">Sort</span>
          <img src={Sort} alt="sort" />
        </button>
        <button
          className="flex items-center justify-center border-[1px] border-[#D9D9D9] rounded-[4px] p-[8px]
"
        >
          <img src={Download} alt="download" />
        </button>
      </div>
    </div>
  );
};

export default TableNav;
