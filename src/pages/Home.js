import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Experiments from "../components/Home/Experiments/Experiments";
import Header from "../layout/Header/header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Experiments />
    </div>
  );
};

export default Home;
