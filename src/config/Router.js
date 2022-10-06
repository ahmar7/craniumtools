import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Auction from "../pages/Auction";
import Configurationauction from "../pages/Configuration/Configurationauction";
import Configuration from "../pages/Configuration/Configurationproject";
import Configurationraffle from "../pages/Configuration/Configurationraffle";
import Configurationsetting from "../pages/Configuration/Configurationsetting";
import Configurationstaking from "../pages/Configuration/Configurationstaking";
import Configurationtoken from "../pages/Configuration/Configurationtoken";
import Configure from "../pages/Configure";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Building from "../pages/Building";
import Raffle from "../pages/Raffle";
import Manager from "../pages/Manager";

const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="manager" element={<Manager />} />
          <Route path="building" element={<Building />} />
          <Route path="configure" element={<Configure />} />
          <Route path="configuration/project" element={<Configuration />} />
          <Route
            path="configuration/auction"
            element={<Configurationauction />}
          />
          <Route
            path="configuration/raffle"
            element={<Configurationraffle />}
          />
          <Route
            path="configuration/staking"
            element={<Configurationstaking />}
          />
          <Route
            path="configuration/settings"
            element={<Configurationsetting />}
          />
          <Route path="configuration/token" element={<Configurationtoken />} />
          <Route path="project" element={<Project />} />
          <Route path="raffle" element={<Raffle />} />
          <Route path="auction" element={<Auction />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
