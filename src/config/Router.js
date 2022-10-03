import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Configurationauction from "../pages/Configuration/Configurationauction";
import Configuration from "../pages/Configuration/Configurationproject";
import Configurationraffle from "../pages/Configuration/Configurationraffle";
import Configurationsetting from "../pages/Configuration/Configurationsetting";
import Configurationstaking from "../pages/Configuration/Configurationstaking";
import Configurationtoken from "../pages/Configuration/Configurationtoken";
import Configure from "../pages/Configure";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Manage from "../pages/Manage";
import Services from "../pages/Services";

const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="manage" element={<Manage />} />
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
          <Route path="layout" element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
