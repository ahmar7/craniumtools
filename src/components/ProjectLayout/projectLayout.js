import React, { useState } from "react";
import {
  Layoutbg,
  Dp,
  Twittersmall,
  Discordsmall,
  Img,
} from "../../utils/allImgs";
import "./projectlayout.css";
const ProjectLayout = () => {
  const [auction, setAuction] = useState(false);
  const [staking, setStaking] = useState(true);
  const [raffles, setRaffles] = useState(false);
  let toggleAuction = () => {
    setAuction(true);
    setRaffles(false);
    setStaking(false);
  };
  let togglStaking = () => {
    setRaffles(false);
    setAuction(false);
    setStaking(true);
  };
  let togglRaffles = () => {
    setStaking(false);
    setAuction(false);
    setRaffles(true);
  };

  return (
    <div className="me layout-area">
      <div className="layout-background">
        <img src={Layoutbg} alt="" />
      </div>
      <div className="dp-area">
        <div className="circle-dp">
          <img src={Dp} alt="" />
        </div>
        <div className="social-dp">
          <a href="">
            <img src={Twittersmall} alt="" />
          </a>
          <a href="">
            <img src={Discordsmall} alt="" />
          </a>
        </div>
      </div>
      <div className="skull-area">
        <h3>Skull NFT</h3>
        <p>
          Kiwami is a collection of 10,000 avatars for a next-generation
          collective of artists, builders, and rule-breakers. Carefully designed
          in the metaverse & born in Japan, holders have access to exclusive
          Kiwami offerings and the opportunity to shape our collective future.
          Join us in Chasing the Tsunami.
        </p>
      </div>
      <div className="layout-switch">
        <button
          onClick={toggleAuction}
          className={auction ? " border-active " : ""}
        >
          AUCTIONS
        </button>
        <button
          onClick={togglStaking}
          className={staking ? " border-active " : ""}
        >
          STAKING
        </button>
        <button
          onClick={togglRaffles}
          className={raffles ? " border-active " : ""}
        >
          RAFFLES
        </button>
      </div>
      <div className="layout-detail">
        <div className="staking">
          <div className="left-block">
            <div className="blck">
              <h3>0 Staked</h3>
              <p>Yours Staked</p>
            </div>
            <div className="blck">
              <h3>0 Staked</h3>
              <p>Total Staked - 1%</p>
            </div>
            <div className="blck">
              <h3>0.00 $SOL</h3>
              <p>Daily Rewards</p>
            </div>
          </div>
          <div className="left-block">
            <button className="panel-btn primary-btn">Select Wallet</button>
            <button className="panel-btn danger-btn">Select Wallet</button>
          </div>
        </div>
      </div>
      <div className="profile-modal-card align-left">
        <div className="modal-card layout-card">
          <img className="dp" src={Img} alt="" />
          <div className="modal-card-head layout-card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
          </div>
          <div className="layout-card-btn">
            <button className="danger-btn">Unstake</button>
            <button className="success-btn">Claim</button>
          </div>
        </div>
        <div className="modal-card layout-card">
          <img className="dp" src={Img} alt="" />
          <div className="modal-card-head layout-card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
          </div>
          <div className="layout-card-btn">
            <button className="danger-btn">Unstake</button>
            <button className="success-btn">Claim</button>
          </div>
        </div>
        <div className="modal-card layout-card">
          <img className="dp" src={Img} alt="" />
          <div className="modal-card-head layout-card-head">
            <div>
              <h3>NFT Name 1</h3>
            </div>
          </div>
          <div className="layout-card-btn">
            <button className="danger-btn">Unstake</button>
            <button className="success-btn">Claim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
