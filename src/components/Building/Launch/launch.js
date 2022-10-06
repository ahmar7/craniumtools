import "./launch.css";

import ProgressBar from "@ramonak/react-progress-bar";

import React from "react";
import { Link } from "react-router-dom";
import {
  Metamask,
  Coinbase,
  Walletconnect,
  Fortmatic,
} from "../../../utils/allImgs";
const Launch = () => {
  return (
    <div className="">
      <div className="heading-section   pt pm section-bg">
        <h3>Ready to begin setting up services?</h3>
        <span className="underline"></span>
        <p>
          Before persisting make sure to sign in with a noteworthy wallet. This
          wallet will act as an admin <br /> configuration to operate your
          project.
        </p>
        <button className="panel-btn text-center primary-btn">
          <Link to="/configure">Select Wallet</Link>
        </button>
      </div>
      <div className="manager-wallet bring-up me  ">
        <div className="manager-heading no-border">
          <div className=" ">
            <h3>Stack your NFT</h3>
            <p>
              Before persisting make sure to sign in with a noteworthy wallet.
              This wallet will act as an admin configuration to operate your
              project.
            </p>
          </div>
        </div>
        <ProgressBar
          completed={60}
          customLabel="74% STACKED"
          className="wrapper"
          barContainerClassName="bar-container"
          completedClassName="barCompleted"
          labelClassName="label-cal"
        />
        <div className="wallet-block">
          <div className="wallet-left">
            <div className="wallet-header">
              <div className="header-inner">
                <h3>Wallet Disconnect</h3>
              </div>
              <div className="header-inner">
                <h5>Balance</h5>
                <h3>0.000 SKULL</h3>
              </div>
            </div>
            <div className="wallet-row">
              <div className="row-inner">
                <img src={Metamask} alt="" />
                <h3>MetaMask</h3>
              </div>
            </div>
            <div className="wallet-row">
              <div className="row-inner">
                <img src={Coinbase} alt="" />
                <h3>Coinbase Wallet</h3>
              </div>
            </div>
            <div className="wallet-row">
              <div className="row-inner">
                <img src={Walletconnect} alt="" />
                <h3>WalletConnect</h3>
              </div>
            </div>
            <div className="wallet-row">
              <div className="row-inner">
                <img src={Fortmatic} alt="" />
                <h3>Fortmatic</h3>
              </div>
            </div>
            <div className="wallet-row no-border">
              <h3 className="show-more">Show More Options</h3>
            </div>
          </div>
          <div className="wallet-left ml">
            <div className="wallet-header">
              <div className="header-inner">
                <h3>Rate : 0 / Day</h3>
              </div>
              <div className="header-inner">
                <h5>Balance</h5>
                <h3>0.000 SKULL</h3>
              </div>
            </div>
            <div className="wallet-row">
              <div className="row-inner">
                <img src={Metamask} alt="" />
                <h3>MetaMask</h3>
              </div>
            </div>
            <div className="wallet-row">
              <div className="row-inner">
                <img src={Coinbase} alt="" />
                <h3>Coinbase Wallet</h3>
              </div>
            </div>
            <div className="wallet-row">
              <div className="row-inner">
                <img src={Walletconnect} alt="" />
                <h3>WalletConnect</h3>
              </div>
            </div>
            <div className="wallet-row">
              <div className="row-inner">
                <img src={Fortmatic} alt="" />
                <h3>Fortmatic</h3>
              </div>
            </div>
            <div className="wallet-row no-border">
              <h3 className="show-more">Show More Options</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
