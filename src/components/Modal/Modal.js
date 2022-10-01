import React, { useState } from "react";
 
import { Cross  } from "../../../utils/allImgs";
const Modal = () => {
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
    <div>
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

export default Modal;
