import React from "react";
import { Img } from "../../utils/allImgs";
import "./raffle.css";
const Raffle = () => {
  return (
    <div className="me layout-area">
      <div className="main-result">
        <div className="result-block">
          <img src={Img} alt="" />
          <div className="result-button">
            <input type="number" placeholder="10" />
            <button className="primary-btn  ">Bid</button>
          </div>
        </div>
        <div className="result-block let">
          <div>
            <h3 className="result-head">NFT NAME</h3>
          </div>
          <div className="result-blk">
            <div className="result-first">
              <p className="para">ENDS IN</p>
              <h3 className="primary-head">1D 1H 1M 10S</h3>
            </div>
            <div className="last-child">
              <p className="para">1X TICKET COST</p>
              <h3 className="primary-head">1 $PRDX</h3>
            </div>
          </div>
          <div className="result-blk">
            <div className="result-first">
              <p className="para">START DATE</p>
              <h3 className="primary-head">September 23, 2022</h3>
            </div>
            <div className="last-child">
              <p className="para">1X TICKET COST</p>
              <h3 className="primary-head">1 $PRDX</h3>
            </div>
          </div>
          <div className="result-blk">
            <div className="result-first">
              <p className="para">TOTAL TICKETS</p>
              <h3 className="primary-head">100</h3>
            </div>
            <div className="last-child">
              <p className="para">1X TICKET COST</p>
              <h3 className="primary-head">1 $PRDX</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Raffle;
