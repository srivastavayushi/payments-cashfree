import React from "react";

import Prev from "../../svgs/Vector3.svg";
import Next from "../../svgs/Next.svg";

const TableFooter = ({
  onPrevClick,
  onNextClick,
  changeCurrentPage,
  currentPage,
  numbers,
}) => {
  return (
    <div className="mt-[24px] mx-auto flex flex-row gap-[20px] w-[630px] h-[32px]">
      <button
        onClick={onPrevClick}
        className="w-[120px] py-[6px] px-[12px] rounded flex flex-row gap-[16px] items-center justify-center border-[1px]  border-[#D9D9D9] font-medium text-[#4D4D4D]"
      >
        <img src={Prev} alt="prev-page" />
        Previous
      </button>
      <div className="flex flex-row gap-[8px] items-center h-full">
        {numbers.map((n) => (
          <button
            key={n}
            onClick={() => changeCurrentPage(n)}
            className={
              currentPage === n
                ? "w-[28px] h-[28px] py-[2px] rounded-[4px] text-sm bg-[#146EB4] text-[#FFFFFF]"
                : "w-[28px] h-[28px] py-[2px] rounded-[4px] text-sm text-[#4D4D4D]"
            }
          >
            {n}
          </button>
        ))}
      </div>
      <button
        onClick={onNextClick}
        className="w-[100px] py-[6px] px-[12px] rounded flex flex-row gap-[16px] items-center justify-center border-[1px]  border-[#D9D9D9] font-medium text-[#4D4D4D]"
      >
        Next
        <img src={Next} alt="next-page" />
      </button>
    </div>
  );
};

export default TableFooter;
