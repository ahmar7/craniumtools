import React from "react";
import { Layoutbg, Dp, Twittersmall, Discordsmall } from "../../utils/allImgs";
import "./projectlayout.css";
const ProjectLayout = () => {
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
        <button>AUCTIONS</button>
        <button className="border-active ">STAKING</button>
        <button>RAFFLES</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProjectLayout;
