import React from "react";
import Managers from "../components/Admin/Managers/Managers";
import Chart from "../components/Admin/StaticChart/Chart";
import MonthlyChart from "../components/Admin/MonthlyChart/Chart";
import Header from "../layout/Header/dashboardHeader/header";

import Top from "../components/GoToTop/Top";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Managers />
      <Chart />
      <MonthlyChart />
      <Top />
    </div>
  );
};

export default Dashboard;
