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
  const [modal, setModal] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => {
    setModal(true);

    setIsActive(false);
  };
  const closeModal = () => {
    setIsActive(true);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div onClick={toggleBar} className={sideactive ? " overlay " : ""}></div>
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
                <NavLink to="/configuration/project">PTOJECT</NavLink>
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
          <Link to="#" onClick={toggleModal}>
            <button className="panel-btn primary-btn">Select Wallet</button>
          </Link>
        </div>
      </div>
      {modal && (
        <div className={isActive ? "modalup modal" : "modal"}>
          <div
            onClick={toggleModal}
            className={isActive ? "overlayup overlay" : "overlay"}
          ></div>
          <div className="modal-content">
            <div className="project-modal">
              <div className="project-heading special">
                <h3>Fund Token Reward Tool</h3>
                <span class="underline"></span>
                <p>Please make sure you enter the currect info.</p>
              </div>
              <br />
              <br />
              <form className="modal-form" action="#">
                <div className="colmn-right raffle-block">
                  <div className="raffle-inputcontainer">
                    <label>Number of tokens to fund</label>
                    <input
                      required
                      type="text"
                      className="raffle-input"
                      placeholder="Number of tokens to fund"
                    />
                  </div>

                  <br />

                  <div className="  ">
                    <button
                      onClick={closeModal}
                      className="panel-btn primary-btn"
                    >
                      Select Wallet
                    </button>
                  </div>
                </div>
              </form>
              <div className="close-modal" onClick={closeModal}>
                <img src={Cross} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
