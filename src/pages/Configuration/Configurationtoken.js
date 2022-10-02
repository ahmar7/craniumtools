import React from "react";
import ConfigurationToken from "../../components/ConfigurationProject/Token/configurationToken";
import Top from "../../components/GoToTop/Top";
import Header from "../../layout/Header/configurationHeader/header";

const Configurationtoken = () => {
  return (
    <div>
      <Header />
      <ConfigurationToken />
      <Top />
    </div>
  );
};

export default Configurationtoken;
