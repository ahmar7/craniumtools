import React from "react";
import ConfigurationAuction from "../../components/ConfigurationProject/Auction/configurationAuction";
import Top from "../../components/GoToTop/Top";
import Header from "../../layout/Header/configurationHeader/header";

const Configurationauction = () => {
  return (
    <div>
      <Header />
      <ConfigurationAuction />
      <Top />
    </div>
  );
};

export default Configurationauction;
