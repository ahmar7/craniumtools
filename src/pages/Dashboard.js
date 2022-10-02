import React from "react";
import Managers from "../components/Dashboard/Managers/Managers";
import Chart from "../components/Dashboard/StaticChart/Chart";
import MonthlyChart from "../components/Dashboard/MonthlyChart/Chart";
import Header from "../layout/dashboardHeader/header";
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
