import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Experiments from "../components/Home/Experiments/Experiments";
import Footer from "../layout/Footer/footer";
import Header from "../layout/Header/header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Experiments />
      <Footer />
    </div>
  );
};

export default Home;
