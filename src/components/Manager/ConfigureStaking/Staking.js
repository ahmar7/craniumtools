import React from "react";
import "./staking.css";
import { Link } from "react-router-dom";
const Staking = () => {
  return (
    <div className="mt container-link    mb">
      <div className="project-container">
        <div className="project-heading">
          <h3>Configure Staking</h3>
          <span className="underline"></span>
          <p>
            Please make sure you are signed in with the correct wallet before
            proceeding. Having Issues? <br /> Reach out to us on Discord to
            assist with the matter!!
          </p>
        </div>
        <form className="project-form" action="">
          <div className="input-container">
            <label>Rewards Token Mint Address</label>
            <input
              type="text"
              placeholder="Rewards Token Mint Address"
              required
              className="project-input"
            />
          </div>
          <div className="input-container">
            <label>Daily rewards amount / NFT</label>
            <input
              type="text"
              placeholder="Daily rewards amount / NFT"
              required
              className="project-input"
            />
          </div>
          <br />
          <div className="project-heading">
            <h3>Collection Details</h3>
            <span className="underline"></span>
            <p>
              Past here the Mint Hash List (Token Address List) containing all
              the NFTs of your collection. It is <br /> exactly the same Hash
              used by secondary markets such as Magic Eden.
            </p>
          </div>
          <div className="project-form">
            <div className="input-container">
              <label>Mint Hash List</label>
              <input
                type="text"
                placeholder="Rewards Token Mint Address"
                required
                className="project-input"
              />
            </div>
          </div>
          <div className="submit-btn">
            <button className="panel-btn primary-btn">
              <Link to="#">Apply Changes</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Staking;
