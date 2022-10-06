import React from "react";
import ConfigurationProject from "../../components/ConfigurationProject/Project/configurationProject";
import Top from "../../components/GoToTop/Top";
import Header from "../../layout/Header/configurationHeader/header";

const Configuration = () => {
  return (
    <div className="config-bg">
      <Header />
      <ConfigurationProject />
      <Top />
    </div>
  );
};

export default Configuration;
