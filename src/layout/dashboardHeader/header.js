import React from "react";
import { Logo } from "../../utils/allImgs";
import { Link, NavLink } from "react-router-dom";
import "../Header/header.css";
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
    <div id="header" className="main-container">
      <div className="header me">
        <div className="left-colmn">
          <ul className="nav-ul nav-2">
            <li>
              <NavLink to="/">
                <img src={Logo} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/manage">Manage</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/configure">Configure</NavLink>
            </li>
          </ul>
        </div>
        <div className="right-colmn">
          <Link to="/">
            {" "}
            <button className="panel-btn primary-btn">Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
