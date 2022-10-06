import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./rafel.css";
import { Cross, Delete, Edit, Img, Plus } from "../../../utils/allImgs";
const Raffle = () => {
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
  // Nft Modal
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
  if (modal || nftmodal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="pname mb   mt">
      <div className="project-container">
        <div className="project-heading">
          <h3>Configure Raffle</h3>
          <span className="underline"></span>
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
      <div className="profile-card">
        <div className="card">
          <img className="dp" src={Img} alt="" />
          <div className="card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
            <div className="img-side">
              <img
                className="card-edit"
                src={Edit}
                onClick={toggleModal}
                alt=""
              />
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
              <img
                className="card-edit"
                src={Edit}
                onClick={toggleModal}
                alt=""
              />
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
              <img
                className="card-edit"
                src={Edit}
                onClick={toggleModal}
                alt=""
              />
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
              <img
                className="card-edit"
                src={Edit}
                onClick={toggleModal}
                alt=""
              />
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
              <img
                className="card-edit"
                src={Edit}
                onClick={toggleModal}
                alt=""
              />
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
              <img
                className="card-edit"
                src={Edit}
                onClick={toggleModal}
                alt=""
              />
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
              <img
                className="card-edit"
                src={Edit}
                onClick={toggleModal}
                alt=""
              />
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
              <img
                className="card-edit"
                src={Edit}
                onClick={toggleModal}
                alt=""
              />
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
                <br />
                <h3>Edit Raffle</h3>
                <span className="underline"></span>
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
                  <div className="raffle-modal-inputcontainer">
                    <label>Ticket Cost Per User</label>
                    <input
                      required
                      type="text"
                      className="raffle-modal-input half-input"
                      placeholder="Ticket Cost Per User"
                    />
                  </div>
                  <div className="raffle-modal-inputcontainer">
                    <label>Start Date</label>
                    <input
                      required
                      type="date"
                      className="raffle-modal-input"
                      placeholder="Start Date"
                    />
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

                  <div className="  ">
                    <button
                      onClick={closeModal}
                      className="panel-btn primary-btn"
                    >
                      Edit Raffle
                    </button>
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
                <span className="underline"></span>
                <p>
                  Please make sure you are signed in with the correct wallet
                  before proceeding. Having Issues? <br /> Reach out to us on
                  Discord to assist with the matter!
                </p>
              </div>
              <div className="profile-modal-card">
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

export default Raffle;
