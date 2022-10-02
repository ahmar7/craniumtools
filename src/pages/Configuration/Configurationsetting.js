import React from "react";
import Configurationsettings from "../../components/ConfigurationProject/Setting/configurationSetting";
import Top from "../../components/GoToTop/Top";
import Header from "../../layout/Header/configurationHeader/header";

const Configurationsetting = () => {
  return (
    <div>
      <Header />
      <Configurationsettings />
      <Top />
    </div>
  );
};

export default Configurationsetting;
