import React, { useState } from "react";
 
import {Cross, Delete, Edit,Img} from "../../../utils/allImgs";
import { Link } from "react-router-dom";
import "./project.css";
const Project = () => {
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
    <div className="mb mt">
      <div className="heading-section">
        <h3>Manage NFT Projects</h3>
        <span class="underline"></span>
        <p>
          is committed to creating a new generation of grade NFT projects across{" "}
          <br /> the Web3 space. We will do this by providing efficient,
          convenient, secure,
        </p>
      </div>
      <div className="manager-wallet me  ">
        <div className="manager-heading no-border">
          <div className="p-25 chart-nft">
            <h3>Manage NFT Projects</h3>
          </div>
          <div className="input chart-right  p-25">
            <input placeholder="Search Project Here" type="text" />
            <button
              onClick={toggleModal}
              className="panel-btn primary-btn nft-btn"
            >
              ADD
            </button>
          </div>
        </div>
        <div className="manager-heading heading-bg">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25 action-btn">
            <p>Action</p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25">
            <p className="delete-icon">
              <img src={Delete} alt="" />
            </p>
            <p className="edit-icon">
              <img src={Edit} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25">
            <p className="delete-icon">
              <img src={Delete} alt="" />
            </p>
            <p className="edit-icon">
              <img src={Edit} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25">
            <p className="delete-icon">
              <img src={Delete} alt="" />
            </p>
            <p className="edit-icon">
              <img src={Edit} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25">
            <p className="delete-icon">
              <img src={Delete} alt="" />
            </p>
            <p className="edit-icon">
              <img src={Edit} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25">
            <p className="delete-icon">
              <img src={Delete} alt="" />
            </p>
            <p className="edit-icon">
              <img src={Edit} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25">
            <p className="delete-icon">
              <img src={Delete} alt="" />
            </p>
            <p className="edit-icon">
              <img src={Edit} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25">
            <p className="delete-icon">
              <img src={Delete} alt="" />
            </p>
            <p className="edit-icon">
              <img src={Edit} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25">
            <p className="delete-icon">
              <img src={Delete} alt="" />
            </p>
            <p className="edit-icon">
              <img src={Edit} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25">
            <p>Project Name</p>
          </div>

          <div className="p-25">
            <p className="delete-icon">
              <img src={Delete} alt="" />
            </p>
            <p className="edit-icon">
              <img src={Edit} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading">
          <div className="p-25"></div>
          <div className="input  p-25">
            <p>Rows Per Page</p>
            <p>1-10 of 276</p>
            <p className="sp"> &lt; </p>
            <p className="sp">&gt;</p>
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
                <h3>Choose NFT</h3>
                <span class="underline"></span>
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
                
               
                
                 
                 
              </div> <br />
              <div className="  ">
                <button onClick={closeModal} className="panel-btn primary-btn">
                  Select NFT
                </button>
              </div>
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

export default Project;
