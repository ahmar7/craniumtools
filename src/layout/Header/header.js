import React, { useState, useEffect } from "react";

import { Logo } from "../../utils/allImgs";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
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
          <ul className="nav-ul">
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
