import React from "react";
import Top from "../components/GoToTop/Top";
import ProjectLayout from "../components/ProjectLayout/projectLayout";
import Header from "../layout/Header/dashboardHeader/header";

const Layout = () => {
  return (
    <div>
      <Header />
      <ProjectLayout />
      <Top />
    </div>
  );
};
export default Layout;
