import React from "react";

// SVGs
import Arrow from "../../svgs/arrow.svg";

import { Overview } from "../../data/static";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col w-full h-[178px] gap-[20px]">
      <div className="flex flex-row  w-full justify-between items-center">
        <span className="font-medium text-lg leading-7">
          Overview
        </span>
        <button className="border-[1px] border-[#D9D9D9] w-[137px] flex flex-row gap-[16px] items-center justify-center h-full">
          <span className="text-base leading-[14px]">
            Last Month
          </span>
          <img src={Arrow} alt="Arrow" />
        </button>
      </div>
      <div className="flex flex-row gap-[24px]">
        {Overview.map((card) => (
          <div
            className="w-1/2 p-[20px] bg-[#FFFFFF]
"
            style={{
              boxShadow: "0px 2px 6px 0px #1A181E0A",
            }}
            key={card?.id}
          >
            <div className="flex flex-col gap-[16px] ">
              <p className="leading-6 text-[#4D4D4D]">
                {card?.content}
              </p>
              <p
                className="text-[#1A181E] font-medium text-[32px]
"
              >
                {card?.amt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHeader;
