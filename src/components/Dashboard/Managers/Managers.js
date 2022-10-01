import React from "react";
import "./manager.css";
import { Link } from "react-router-dom";
import { Delete } from "../../../utils/allImgs";
const Managers = () => {
  return (
    <div className="mb mt">
      <div className="heading-section">
        <h3>
          Manage <span className="banner-c"> Managers</span>
        </h3>
        <span class="underline"></span>
        <p>
          is committed to creating a new generation of grade NFT projects across{" "}
          <br /> the Web3 space. We will do this by providing efficient,
          convenient, secure,
        </p>
      </div>
      <div className="manager-wallet me  ">
        <div className="manager-heading no-border">
          <div className="p-25 ">
            <h3>Manager Wallet</h3>
          </div>
          <div className="input  p-25">
            <input placeholder="INPUT WALLET HERE" type="text" />
            <button className="panel-btn primary-btn">
              <Link to="/">ADD</Link>
            </button>
          </div>
        </div>
        <div className="manager-heading heading-bg">
          <div className="p-25 ">
            <p>Manager Wallet</p>
          </div>
          <div>
            <p>Manage Nickname</p>
          </div>
          <div className="p-25 ">
            <p>Delete</p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25 ">
            <p>Project Name</p>
          </div>
          <div>
            <p>Manager Nickname</p>
          </div>
          <div className="p-25 ">
            <p>
              <img src={Delete} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25 ">
            <p>Project Name</p>
          </div>
          <div>
            <p>Manager Nickname</p>
          </div>
          <div className="p-25 ">
            <p>
              <img src={Delete} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25 ">
            <p>Project Name</p>
          </div>
          <div>
            <p>Manager Nickname</p>
          </div>
          <div className="p-25 ">
            <p>
              <img src={Delete} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25 ">
            <p>Project Name</p>
          </div>
          <div>
            <p>Manager Nickname</p>
          </div>
          <div className="p-25 ">
            <p>
              <img src={Delete} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25 ">
            <p>Project Name</p>
          </div>
          <div>
            <p>Manager Nickname</p>
          </div>
          <div className="p-25 ">
            <p>
              <img src={Delete} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25 ">
            <p>Project Name</p>
          </div>
          <div>
            <p>Manager Nickname</p>
          </div>
          <div className="p-25 ">
            <p>
              <img src={Delete} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25 ">
            <p>Project Name</p>
          </div>
          <div>
            <p>Manager Nickname</p>
          </div>
          <div className="p-25 ">
            <p>
              <img src={Delete} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25 ">
            <p>Project Name</p>
          </div>
          <div>
            <p>Manager Nickname</p>
          </div>
          <div className="p-25 ">
            <p>
              <img src={Delete} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading detail">
          <div className="p-25 ">
            <p>Project Name</p>
          </div>
          <div>
            <p>Manager Nickname</p>
          </div>
          <div className="p-25 ">
            <p>
              <img src={Delete} alt="" />
            </p>
          </div>
        </div>
        <div className="manager-heading">
          <div className="p-25 "></div>
          <div className="input  p-25">
            <p>Rows Per Page</p>
            <p>1-10 of 276</p>
            <p className="sp"> &lt; </p>
            <p className="sp">&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managers;
