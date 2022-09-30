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
  
const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
