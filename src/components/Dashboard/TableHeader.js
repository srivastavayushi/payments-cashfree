import React from "react";

import Down from "../../svgs/Triangle-Icon.svg";
import Fees from "../../svgs/Vector2.svg";

const TableHeader = () => {
  return (
    <div className="h-[40px] py-[10px] px-[12px] bg-[#F2F2F2] flex flex-row items-center justify-between gap-[40px] text-[#4D4D4D] rounded-[4px]">
      <span className="w-1/4 text-sm ">Order ID</span>
      <span className="w-1/4 text-sm gap-[4px] flex flex-row items-center ">
        Order Date <img src={Down} alt="down" />
      </span>
      <span className="w-1/4 text-sm  text-right">
        Order Amount
      </span>
      <span className="w-1/4 text-sm gap-[4px] flex flex-row items-center justify-end ">
        Transaction Fees
        <img src={Fees} alt="fees" />
      </span>
    </div>
  );
};

export default TableHeader;
