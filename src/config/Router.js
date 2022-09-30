import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
  
const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes> 
          <Route exact path="/" element={<Home />} />
           
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
