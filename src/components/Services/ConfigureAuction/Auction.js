import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auction.css";

import { Cross, Delete, Edit, Img, Plus } from "../../../utils/allImgs";
const Auction = () => {
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
    <div className="pname mb section-bg   mt">
      <div className="project-container ">
        <div className="project-heading">
          <h3>Configure Auction</h3>
          <span class="underline"></span>
          <p>Configure the projects auction or create one for them!</p>
        </div>
        <form className="raffle-form" action="">
          <div className="colmn-left raffle-block">
            <label htmlFor="upload">
              Choose NFT
              <br />
              <div className="image-picker">
                <img src={Plus} alt="" />
              </div>
              <input
                required
                type="file"
                id="upload"
                style={{ display: "none" }}
              />
            </label>
          </div>
          <div className="colmn-right raffle-block">
            <div className="raffle-inputcontainer no-gap">
              <label>Starting Price</label>
              <input
                required
                type="text"
                className="raffle-input"
                placeholder="Starting Price"
              />
            </div>
            <div className="raffle-inputcontainer  ">
              <label>Increment</label>
              <input
                required
                type="text"
                className="raffle-input"
                placeholder="Increment"
              />
            </div>
            <div className="raffle-inputcontainer">
              <label>Duration</label>
              <input
                required
                type="text"
                className="raffle-input"
                placeholder="Duration"
              />
            </div>
            <div className="raffle-inputcontainer">
              <label>Grace Period</label>
              <input
                required
                type="text"
                className="raffle-input"
                placeholder="Grace Period"
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

            <div className="raffle-btn ">
              <button onClick={toggleModal} className="panel-btn primary-btn">
                Create Raffle
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="profile-card">
        <div className="card">
          <img className="dp" src={Img} alt="" />
          <div className="card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
            <div className="img-side">
              <img className="card-edit" src={Edit} alt="" />
              <img className="card-delete" src={Delete} alt="" />
            </div>
          </div>
          <div className="click-btn">
            <button>REFUND RAFFLE</button>
          </div>
        </div>
        <div className="card">
          <img className="dp" src={Img} alt="" />
          <div className="card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
            <div className="img-side">
              <img className="card-edit" src={Edit} alt="" />
              <img className="card-delete" src={Delete} alt="" />
            </div>
          </div>
          <div className="click-btn">
            <button>REFUND RAFFLE</button>
          </div>
        </div>
        <div className="card">
          <img className="dp" src={Img} alt="" />
          <div className="card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
            <div className="img-side">
              <img className="card-edit" src={Edit} alt="" />
              <img className="card-delete" src={Delete} alt="" />
            </div>
          </div>
          <div className="click-btn">
            <button>REFUND RAFFLE</button>
          </div>
        </div>
        <div className="card">
          <img className="dp" src={Img} alt="" />
          <div className="card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
            <div className="img-side">
              <img className="card-edit" src={Edit} alt="" />
              <img className="card-delete" src={Delete} alt="" />
            </div>
          </div>
          <div className="click-btn">
            <button>REFUND RAFFLE</button>
          </div>
        </div>
        <div className="card">
          <img className="dp" src={Img} alt="" />
          <div className="card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
            <div className="img-side">
              <img className="card-edit" src={Edit} alt="" />
              <img className="card-delete" src={Delete} alt="" />
            </div>
          </div>
          <div className="click-btn">
            <button>REFUND RAFFLE</button>
          </div>
        </div>
        <div className="card">
          <img className="dp" src={Img} alt="" />
          <div className="card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
            <div className="img-side">
              <img className="card-edit" src={Edit} alt="" />
              <img className="card-delete" src={Delete} alt="" />
            </div>
          </div>
          <div className="click-btn">
            <button>REFUND RAFFLE</button>
          </div>
        </div>
        <div className="card">
          <img className="dp" src={Img} alt="" />
          <div className="card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
            <div className="img-side">
              <img className="card-edit" src={Edit} alt="" />
              <img className="card-delete" src={Delete} alt="" />
            </div>
          </div>
          <div className="click-btn">
            <button>REFUND RAFFLE</button>
          </div>
        </div>
        <div className="card">
          <img className="dp" src={Img} alt="" />
          <div className="card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
            <div className="img-side">
              <img className="card-edit" src={Edit} alt="" />
              <img className="card-delete" src={Delete} alt="" />
            </div>
          </div>
          <div className="click-btn">
            <button>REFUND RAFFLE</button>
          </div>
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
                <h3>Edit Raffle</h3>
                <span class="underline"></span>
                <p>
                  Please make sure you are signed in with the correct wallet
                  before proceeding. Having Issues? <br /> Reach out to us on
                  Discord to assist with the matter!
                </p>
              </div>
              <form className="modal-form" action="#">
                <div className="colmn-right raffle-block">
                  <div className="field-inline">
                    <div className="   inline-field">
                      <label>Total Raffle Tickets</label>
                      <br />
                      <input
                        required
                        type="text"
                        className="raffle-modal-input"
                        placeholder="Total Raffle Tickets"
                      />
                    </div>
                    <div className="  inline-field">
                      <label>Max Raffle Tickets Per User</label>
                      <br />
                      <input
                        required
                        type="text"
                        className="raffle-modal-input"
                        placeholder="Max Raffle Tickets Per User"
                      />
                    </div>
                  </div>
                  <br className="hide" />
                  <div className="field-inline">
                    <div className="   inline-field">
                      <label>Total Raffle Tickets</label>
                      <br />
                      <input
                        required
                        type="text"
                        className="raffle-modal-input"
                        placeholder="Total Raffle Tickets"
                      />
                    </div>
                    <div className="  inline-field">
                      <label>Max Raffle Tickets Per User</label>
                      <br />
                      <input
                        required
                        type="text"
                        className="raffle-modal-input"
                        placeholder="Max Raffle Tickets Per User"
                      />
                    </div>
                  </div>

                  <div className="raffle-modal-inputcontainer">
                    <label>End Date</label>
                    <input
                      required
                      type="date"
                      className="raffle-modal-input"
                      placeholder="End Date"
                    />
                  </div>
                  <br />

                  <div className=" ">
                    <button
                      onClick={closeModal}
                      className="panel-btn primary-btn"
                    >
                      Edit Raffle
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
    </div>
  );
};

export default Auction;
