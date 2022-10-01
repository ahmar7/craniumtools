import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
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
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
