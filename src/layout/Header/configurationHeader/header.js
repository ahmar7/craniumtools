import React, { useState } from "react";
import "../header.css";
import { Logo, Cross } from "../../../utils/allImgs";
import { Link, NavLink } from "react-router-dom";
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

  return (
    <>
      <div onClick={closeBar} className={sideactive ? " overlay " : ""}></div>
      <div className={sideactive ? " show-it   main-side" : "main-side "}>
        <div onClick={closeBar} className="close-bar">
          <i class="fa-sharp fa-solid fa-x"></i>
        </div>
        <div className=" side-header ">
          <div className="left-colmn">
            <ul className="side-bar">
              <li onClick={closeBar} className="logo-space">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </li>
              <li onClick={closeBar} className="side-space">
                <NavLink to="/configuration/project">PROJECT</NavLink>
              </li>
              <li onClick={closeBar} className="side-space">
                <NavLink to="/configuration/auction">AUCTIONS</NavLink>
              </li>
              <li onClick={closeBar} className="side-space">
                <NavLink to="/configuration/raffle">RAFFLES</NavLink>
              </li>
              <li onClick={closeBar} className="side-space">
                <NavLink to="/configuration/staking">STAKING</NavLink>
              </li>
              <li onClick={closeBar} className="side-space">
                <NavLink to="/configuration/settings">SETTINGS</NavLink>
              </li>
              <li onClick={closeBar} className="side-space">
                <NavLink to="/configuration/token">TOKEN</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="upper-bg">
        <div className="sidebar-btn">
          <div onClick={toggleBar} className="mobile-bar">
            <i class="fa-solid fa-bars"></i>
          </div>
          <Link to="#">
            <button className="panel-btn primary-btn">Select Wallet</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
