import React, { useState, useEffect } from "react";

import { Logo } from "../../utils/allImgs";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [sideactive, setSideactive] = useState(false);

  const toggleBar = () => {
    setSideactive(true);
  };
  const closeBar = () => {
    setSideactive(false);
  };

  if (sideactive) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  window.addEventListener("scroll", function () {
    let header = this.document.querySelector("#header2");

    if (window.scrollY > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  return (
    <div id="header2" className="main-container ">
      <div onClick={closeBar} className={sideactive ? " overlay " : ""}></div>
      <div className="header me">
        <div className="left-colmn">
          <div onClick={toggleBar} className="mbl-view">
            <i class="fa-solid fa-bars"></i>
          </div>
          <ul className={sideactive ? "nav-ul  mbl-nav" : "nav-ul desk-view"}>
            <li className="close-side-bar">
              <div onClick={closeBar}>
                <i class="fa-sharp fa-solid fa-x"></i>
              </div>
            </li>
            <li className="logo-bar">
              <Link onClick={closeBar} to="/">
                <img src={Logo} alt="" />
              </Link>
            </li>
            <li onClick={closeBar} className="others">
              <Link to="">Home</Link>
            </li>
            <li onClick={closeBar} className="others">
              <Link to="">Experiments</Link>
            </li>
            <li onClick={closeBar} className="others">
              <Link to="">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="right-colmn">
          <Link to="/manage">
            <button className="panel-btn">Project Panel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
