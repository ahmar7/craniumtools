import React from "react";
import ConfigurationStaking from "../../components/ConfigurationProject/Staking/configurationStaking";
import Top from "../../components/GoToTop/Top";
import Header from "../../layout/Header/configurationHeader/header";

const Configurationstaking = () => {
  return (
    <div>
      <Header />
      <ConfigurationStaking />
      <Top />
    </div>
  );
};

export default Configurationstaking;
