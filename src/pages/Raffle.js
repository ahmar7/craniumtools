import React from "react";
import Top from "../components/GoToTop/Top";
import Raffles from "../components/Raffle/raffle";
import Header from "../layout/Header/dashboardHeader/header";

const Raffle = () => {
  return (
    <div>
      <Header />
      <Raffles />
      <Top />
    </div>
  );
};

export default Raffle;
