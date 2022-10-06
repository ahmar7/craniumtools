import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Vector, Cross } from "../../../utils/allImgs";
const ConfigurationToken = () => {
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
  const [fundmodal, setFundModal] = useState(false);
  const [isFundActive, setIsFundActive] = useState(false);

  const toggleFundModal = () => {
    setFundModal(true);

    setIsFundActive(false);
  };
  const closeFundModal = () => {
    setIsFundActive(true);
    setTimeout(() => {
      setFundModal(false);
    }, 300);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className=" token-config pname  section-bg side-blocks ">
      <div className="token-bg tbl-width   ">
        <div className=" no-border">
          <br />
          <br />
          <div className="project-heading">
            <h3>Configure SPL-Token</h3>
            <span className="underline"></span>
            <p>
              Here you need to connect your custom SPL tokens that you will use
              to reward staked holders, <br /> receive raffle tokens, and
              auction tokens.
            </p>
          </div>
        </div>
        <div className="scroll-tbl">
          <table>
            <thead>
              <tr>
                <th className="p-25">Token Symbol</th>
                <th>Address</th>
                <th>Decimal Points</th>
                <th>Balance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="no-border">
                <td className="p-25 bold-text no-border">$SOL</td>
                <td className="no-border">
                  22mwV4x...76{" "}
                  <img className="vector-img" src={Vector} alt="" />
                </td>
                <td className="no-border"> 9</td>
                <td className="no-border">0</td>

                <td className="p-25 no-border">
                  <button
                    style={{ backgroundColor: "#3CB187", cursor: "pointer" }}
                    className="container-btn success-btn"
                    onClick={toggleFundModal}
                  >
                    <Link to="#">Fund</Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={toggleModal}
        className="panel-btn btn-center primary-btn"
      >
        <Link to="#">Connect Your Token</Link>
      </button>
      {modal && (
        <div className={isActive ? "modalup modal" : "modal"}>
          <div
            onClick={toggleModal}
            className={isActive ? "overlayup overlay" : "overlay"}
          ></div>
          <div className="modal-content">
            <div className="project-modal">
              <br />
              <div className="project-heading special">
                <h3>Connect Token</h3>
                <span className="underline"></span>
                <p>Please make sure you enter the currect info.</p>
              </div>
              <br />
              <br />
              <form className="modal-form" action="#">
                <div className="colmn-right raffle-block">
                  <div className="raffle-inputcontainer">
                    <label>Token Address</label>
                    <input
                      required
                      type="text"
                      className="raffle-input"
                      placeholder="Token Address"
                    />
                  </div>
                  <div className="raffle-inputcontainer">
                    <label>Token Address</label>
                    <input
                      required
                      type="text"
                      className="raffle-input"
                      placeholder="Token Address"
                    />
                  </div>
                  <br />

                  <div className="  ">
                    <button
                      onClick={closeModal}
                      className="panel-btn primary-btn"
                    >
                      Connect
                    </button>{" "}
                    <br />
                    <br />
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
      {fundmodal && (
        <div className={isFundActive ? "modalup modal" : "modal"}>
          <div className={isFundActive ? "overlayup overlay" : "overlay"}></div>
          <div className="modal-content">
            <div className="project-modal">
              <div className="project-heading special">
                <br />
                <h3>Fund Token Reward Tool</h3>
                <span className="underline"></span>
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
                      onClick={closeFundModal}
                      className="panel-btn primary-btn"
                    >
                      Select Wallet
                    </button>
                    <br />
                    <br />
                  </div>
                </div>
              </form>
              <div className="close-modal" onClick={closeFundModal}>
                <img src={Cross} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigurationToken;
