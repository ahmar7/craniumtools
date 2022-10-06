import React from "react";
import Top from "../components/GoToTop/Top";
import Auction from "../components/Manager/ConfigureAuction/Auction";
import Raffle from "../components/Manager/ConfigureRaffle/Raffle";
import Staking from "../components/Manager/ConfigureStaking/Staking";
import Token from "../components/Manager/ConfigureToken/Token";
import Project from "../components/Manager/NftProjects/Project";
import ProjectName from "../components/Manager/Project/ProjectName";
import Header from "../layout/Header/dashboardHeader/header";

const Services = () => {
  return (
    <div>
      <Header />
      <Project />
      <ProjectName />
      <Staking />
      <Token />
      <Raffle />
      <Auction />
      <Top />
    </div>
  );
};

export default Services;
