import React from "react";
import "./experiments.css"
import {Icon1,Icon2,Icon3,Icon4} from '../../../utils/allImgs'
const Experiments = () => {
  return (
    <div className="experiments-main mb mt">
      <div className="heading-section">
        <h3>Experiments</h3>
        <span class="underline"></span>
        <p>
          Integrate benefits into your project hassle-free. <br /> We offer a
          variety of services for you to choose from!
        </p>
      </div>
      <div className="experiment-blocks">
        <div className="e-block">
          <img src={Icon1} alt="" />
          <h3>Auctions</h3>
          <p>
            Through the use of your custom SPL-Token, you will be able to host
            NFT auctions for your holders! Configure price, duration, minimum
            increment & more!
          </p>
        </div>
        <div className="e-block">
          <img src={Icon2} alt="" />
          <h3>Staking</h3>
          <p>
            Through the use of your custom SPL-Token, you will be able to host
            NFT auctions for your holders! Configure price, duration, minimum
            increment & more!
          </p>
        </div>
        <div className="e-block">
          <img src={Icon3} alt="" />
          <h3>Raffles</h3>
          <p>
            Through the use of your custom SPL-Token, you will be able to host
            NFT auctions for your holders! Configure price, duration, minimum
            increment & more!
          </p>
        </div>
        <div className="e-block">
          <img src={Icon4} alt="" />
          <h3>Soon</h3>
          <p>Coming Soon.</p>
        </div>
        <div className="e-block">
          <img src={Icon4} alt="" />
          <h3>Soon</h3>
          <p>Coming Soon.</p>
        </div>
        <div className="e-block">
          <img src={Icon4} alt="" />
          <h3>Soon</h3>
          <p>Coming Soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Experiments;
