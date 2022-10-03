import React from "react";
import Auctions from "../components/Auction/auction";
import Top from "../components/GoToTop/Top";
import Header from "../layout/Header/dashboardHeader/header";

const Auction = () => {
  return (
    <div>
      <Header />
      <Auctions />
      <Top />
    </div>
  );
};

export default Auction;
