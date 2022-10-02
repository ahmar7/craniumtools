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
    let header = this.document.querySelector("#header");

    if (window.scrollY > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  return (
    <div id="header" className="main-container ">
      <div className="header me">
        <div className="left-colmn">
          <div onClick={toggleBar} className="mbl-view">
            <i class="fa-solid fa-bars"></i>
          </div>
          <ul className="nav-ul  desk-view">
            <li>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">Experiments</Link>
            </li>
            <li>
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
