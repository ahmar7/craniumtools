import React from "react";
import Top from "../components/GoToTop/Top";
import Launch from "../components/Manage/Launch/launch";
import Header from "../layout/dashboardHeader/header";

const Manage = () => {
  return (
    <div>
      <Header />
      <Launch />
      <Top />
    </div>
  );
};

export default Manage;
