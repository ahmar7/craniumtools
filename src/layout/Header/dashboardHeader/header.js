import React, { useState, useEffect } from "react";
import { Logo } from "../../../utils/allImgs";
import { Link, NavLink } from "react-router-dom";
import "../header.css";
const Header = () => {
  const [sideactive2, setSideactive2] = useState(false);

  const toggleBar = () => {
    setSideactive2(true);
  };
  const closeBar = () => {
    setSideactive2(false);
  };

  if (sideactive2) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  // window.addEventListener("scroll", function () {
  //   let header = this.document.querySelector("#header");

  //   if (window.scrollY > 150) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // });
  return (
    <div id="header" className="main-container ">
      <div onClick={closeBar} className={sideactive2 ? " overlay " : ""}></div>
      <div className="header me">
        <div className="left-colmn">
          <div onClick={toggleBar} className="mbl-view">
            <i className="fa-solid fa-bars"></i>
          </div>
          <ul className={sideactive2 ? "nav-ul  mbl-nav" : "nav-ul desk-view"}>
            <li className="close-side-bar">
              <div onClick={closeBar}>
                <i className="fa-sharp fa-solid fa-x"></i>
              </div>
            </li>
            <li className="logo-bar">
              <NavLink onClick={closeBar} to="/">
                <img src={Logo} alt="" />
              </NavLink>
            </li>

            <li onClick={closeBar} className="others">
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li onClick={closeBar} className="others">
              <NavLink to="/manager">Manager</NavLink>
            </li>
            <li onClick={closeBar} className="others">
              <NavLink to="/configuration/project">Configure</NavLink>
            </li>
            <li onClick={closeBar} className="others">
              <NavLink to="/project">Project</NavLink>
            </li>
          </ul>
        </div>
        <div className="right-colmn">
          <Link to="/">
            <button className="panel-btn primary-btn">Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
