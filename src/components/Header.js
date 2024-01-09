import React from "react";

import Help from "../svgs/Help.svg";
import Menu from "../svgs/Menu.svg";
import Down from "../svgs/Menu2.svg";
import Search from "../svgs/Search.svg";

const Header = () => {
  return (
    <section className="w-full bg-white px-8 py-4 flex flex-row gap-4 border-b border-gray-300 overflow-hidden z-50 top-0 sticky">
      <div className="flex flex-row w-1/3 gap-4 items-center">
        <span className="text-[#1A181E] text-[15px] leading-[22px]">
          Payments
        </span>
        <div className="flex flex-row gap-[6px] text-xs items-center">
          <img src={Help} alt="help" />
          <span className="text-[#4D4D4D]">
            How it works
          </span>
        </div>
      </div>
      <div className="w-1/3 bg-[#F2F2F2] rounded-md px-4 py-[9px] text-[#808080] text-[15px] leading-[22px] flex flex-row gap-[8px]">
        <img src={Search} alt="Search" />
        <input
          className="w-full bg-[#F2F2F2] outline-none"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="w-1/3 flex flex-row items-center justify-end gap-[8px]">
        <img src={Menu} alt="" />
        <img src={Down} alt="" />
      </div>
    </section>
  );
};

export default Header;
