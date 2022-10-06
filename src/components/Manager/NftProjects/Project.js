import React, { useState } from "react";

import { Cross, Delete, Edit, Img } from "../../../utils/allImgs";
import { Link } from "react-router-dom";
import "./project.css";
const Project = () => {
  return (
    <div className="mb mt">
      <div className="heading-section">
        <h3>Manage NFT Projects</h3>
        <span className="underline"></span>
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
            <button className="panel-btn primary-btn nft-btn">ADD</button>
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
    </div>
  );
};

export default Project;
