import React, { useState } from "react";

import { Cross, Delete, Edit, Img, Plus } from "../../../utils/allImgs";
const ConfigurationRaffle = () => {
  const [nftmodal, setNftModal] = useState(false);
  const [nftisActive, setNftIsActive] = useState(false);

  const toggleNft = () => {
    setNftModal(true);

    setNftIsActive(false);
  };
  const closeNft = () => {
    setNftIsActive(true);
    setTimeout(() => {
      setNftModal(false);
    }, 300);
  };
  if (nftmodal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="pname  section-bg side-blocks ">
      <div className="project-container">
        <div className="project-heading">
          <h3>Configure Raffle</h3>
          <span class="underline"></span>
          <p>Configure the projects auction or create one for them!</p>
        </div>
        <form className="raffle-form" action="#">
          <div className="colmn-left raffle-block">
            <label>
              Choose NFT
              <br />
              <div onClick={toggleNft} className="image-picker">
                <img src={Plus} alt="" />
              </div>
            </label>
          </div>
          <div className="colmn-right raffle-block">
            <div className="raffle-inputcontainer no-gap">
              <label>Total Raffle Tickets</label>
              <input
                required
                type="text"
                className="raffle-input"
                placeholder="Total Raffle Tickets"
              />
            </div>
            <div className="raffle-inputcontainer">
              <label>Max Raffle Tickets Per User</label>
              <input
                required
                type="text"
                className="raffle-input"
                placeholder="Max Raffle Tickets Per User"
              />
            </div>
            <div className="raffle-inputcontainer">
              <label>Ticket Cost Per User</label>
              <input
                required
                type="text"
                className="raffle-input"
                placeholder="Ticket Cost Per User"
              />
            </div>
            <div className="raffle-inputcontainer">
              <label>Start Date</label>
              <input
                required
                type="date"
                className="raffle-input"
                placeholder="Start Date"
              />
            </div>
            <div className="raffle-inputcontainer">
              <label>End Date</label>
              <input
                required
                type="date"
                className="raffle-input"
                placeholder="End Date"
              />
            </div>

            <div className="raffle-btn ">
              <button className="panel-btn primary-btn">Create Raffle</button>
            </div>
          </div>
        </form>
      </div>

      {nftmodal && (
        <div className={nftisActive ? "modalup modal" : "modal"}>
          <div
            onClick={toggleNft}
            className={nftisActive ? "overlayup overlay" : "overlay"}
          ></div>
          <div className="modal-content">
            <div className="project-modal">
              <div className="project-heading special">
                <br />
                <h3>Choose Raffle NFT</h3>
                <span class="underline"></span>
                <p>
                  Please make sure you are signed in with the correct wallet
                  before proceeding. Having Issues? <br /> Reach out to us on
                  Discord to assist with the matter!
                </p>
              </div>
              <br />
              <h3 style={{ marginLeft: "20px", fontSize: "16px" }}>FROOTS</h3>
              <div style={{ marginTop: "30px" }} className="profile-modal-card">
                <div className="modal-card">
                  <img className="dp" src={Img} alt="" />
                  <div className="modal-card-head">
                    <div>
                      <h3>NFT Name 1</h3>
                    </div>
                  </div>
                </div>
                <div className="modal-card">
                  <img className="dp" src={Img} alt="" />
                  <div className="modal-card-head">
                    <div>
                      <h3>NFT Name 1</h3>
                    </div>
                  </div>
                </div>
                <div className="modal-card">
                  <img className="dp" src={Img} alt="" />
                  <div className="modal-card-head">
                    <div>
                      <h3>NFT Name 1</h3>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <br />
              <div className="  ">
                <button onClick={closeNft} className="panel-btn primary-btn">
                  Select NFT
                </button>
                <br />
                <br />
              </div>
              <div className="close-modal" onClick={closeNft}>
                <img src={Cross} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigurationRaffle;
