import React from "react";
import DashboardHeader from "./Dashboard/Header";
import DashboardTable from "./Dashboard/Table";

const Dashboard = () => {
  return (
    <section
      className={
        "flex flex-col p-[32px] justify-center items-center gap-[24px] bg-[#FAFAFA] float-end overflow-scroll w-full"
      }
    >
      <DashboardHeader />
      <DashboardTable />
    </section>
  );
};

export default Dashboard;
