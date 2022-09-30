import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Product from "../pages/Product";
import About from "../pages/About";
import Author from "../pages/Author";
import Create from "../pages/Create";
import Editprofile from "../pages/EditProfile";
import Forgetpassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Maintenance from "../components/Maintenance/maintenance";
import Signup from "../pages/Signup";
import Support from "../pages/Support";
import Coming from "../pages/Coming";
import Productdetails from "../pages/ProductDetails";
import Home2 from "../pages/Home2";
import Scan from "../pages/Scan";
import Key from "../pages/Key";
import Qrscanner from "../components/Scanning/QRScan/qrscanner";

import Creater from "../pages/Creater";
const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Home2 />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/author" element={<Author />} />
          <Route path="/create" element={<Create />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/support" element={<Support />} />
          <Route path="/comingsoon" element={<Coming />} />
          <Route path="/productdetails" element={<Productdetails />} />
          <Route path="/creater" element={<Creater />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/key" element={<Key />} />
          {/* <Route path="/qr" element={<Qrscanner />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
