import React from "react";
import { Logo } from "../../utils/allImgs";
import { Link, NavLink } from "react-router-dom";
import "../Header/header.css";
const Header = () => {
  return (
    <div className="main-container">
      <div className="header me">
        <div className="left-colmn">
          <ul className="nav-ul nav-2">
            <li>
              <a href="#">
                <img src={Logo} alt="" />
              </a>
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
              <NavLink to="/referral">Referral</NavLink>
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
