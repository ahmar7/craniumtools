import React from "react";
import { Logo } from "../../utils/allImgs";
import { Link } from "react-router-dom";
import "../Header/header.css";
const Header = () => {
  return (
    <div className="main-container">
      <div className="header me">
        <div className="left-colmn">
          <ul className="nav-ul">
            <li>
              <Link to="">
                <img src={Logo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="">Manage</Link>
            </li>
            <li className="active">
              <Link to="">Dashboard</Link>
            </li>
            <li>
              <Link to="">Services</Link>
            </li>
            <li>
              <Link to="">Referral</Link>
            </li>
          </ul>
        </div>
        <div className="right-colmn">
          <button className="panel-btn primary-btn">
            <Link to="/">Logout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
