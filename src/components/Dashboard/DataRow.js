import React from "react";

const DataRow = ({ transaction }) => {
  return (
    <div
      key={transaction}
      className="h-[48px] py-[14px] px-[12px] border-b-[1px] border-[#E6E6E6]  flex flex-row items-center justify-between gap-[40px]"
    >
      <span className="w-1/4 text-sm text-[#146EB4] font-medium">
        {transaction.orderId}
      </span>
      <span className="w-1/4 text-sm text-[#1A181E]">
        {transaction.orderDate}
      </span>
      <span className="w-1/4 text-sm text-[#1A181E] text-right">
        {transaction.orderAmount}
      </span>
      <span className="w-1/4 text-sm text-[#1A181E] text-right">
        {transaction.transactionFees}
      </span>
    </div>
  );
};

export default DataRow;
