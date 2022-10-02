import React from "react";
import Header from "../layout/dashboardHeader/header";
import Configuration from "../components/Configure/configure";
import Top from "../components/GoToTop/Top";

const Configure = () => {
  return (
    <div>
      <Header />
      <Configuration /> <Top />
    </div>
  );
};

export default Configure;
