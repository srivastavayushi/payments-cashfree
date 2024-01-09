import React from "react";

import Profile from "../svgs/Profile.svg";
import Down from "../svgs/ChevronDown.svg";
import SidebarBase from "../svgs/Sidebar-base.svg";

import { SidebarData } from "../data/static";

const Sidebar = () => {
  return (
    <section className="w-[224px] h-full bg-[#1E2640] px-[10px] py-[16px] flex flex-col gap-[24px] text-white justify-between shrink-0 min-h-screen">
      <div className="flex flex-col gap-[24px] items-center justify-center">
        <div className="h-[42px] flex flex-row gap-[12px] items-center w-[192px]">
          <img src={Profile} alt="logo" />
          <div className="flex flex-col gap-[4px] w-[108px]">
            <div className="text-white font-medium text-[15px] leading-[22px]">
              Nishyan
            </div>
            <div className="text-[13px] leading-4 opacity-80 underline">
              Visit Store
            </div>
          </div>
          <img src={Down} alt="down" />
        </div>
        <div className="w-full flex flex-col gap-[4px]">
          {SidebarData.map((ele) => (
            <button
              className={
                ele.id === 7
                  ? "w-full px-[16px] py-[8px] flex flex-row gap-[12px] opacity-80 font-medium bg-[#FFFFFF1A] rounded-[4px]"
                  : "w-full px-[16px] py-[8px] flex flex-row gap-[12px] opacity-80 font-medium hover:bg-[#FFFFFF1A] rounded-[4px]"
              }
              key={ele.id}
            >
              <img src={ele.logo} alt="nav-ele" />
              <span className="text-[14px] leading-5">
                {ele.title}
              </span>
            </button>
          ))}
        </div>
      </div>
      <button className="bg-[#353C53] h-[54px] w-[192px] rounded py-[6px] px-[12px]">
        <div className="h-[42px] flex flex-row w-[149px] items-center gap-[8px]">
          <img src={SidebarBase} alt="" />
          <div className="flex flex-col gap-[2px] h-full opacity-80 items-start">
            <span className="text-[13px] leading-[16px]">
              Available Credits
            </span>
            <span className="text-base">222.10</span>
          </div>
        </div>
      </button>
    </section>
  );
};

export default Sidebar;
