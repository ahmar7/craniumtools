import React from "react";
import { Link } from "react-router-dom";
import { Img, Delete } from "../../utils/allImgs";
const Auction = () => {
  return (
    <div className="me layout-area ">
      <div className="main-result no-align">
        <div className="result-block">
          <img src={Img} alt="" />
          <div className="result-button">
            <select name="" id="">
              <option value="">10</option>
              <option value="">12</option>
              <option value="">116</option>
            </select>
            <button className="primary-btn  ">Buy Raffle Ticket</button>
          </div>
        </div>
        <div className="result-block let">
          <div>
            <h3 className="result-head">NFT NAME</h3>
          </div>
          <div className="result-blk">
            <div>
              {" "}
              <p className="para">ENDS IN</p>
              <h3 className="primary-head">1D 1H 1M 10S</h3>
            </div>
            <div className="last-child">
              <p className="para">BID INCREMENT</p>
              <h3 className="primary-head">10%</h3>
            </div>
          </div>
          <div className="result-blk">
            <div>
              <p className="para">START DATE</p>
              <h3 className="primary-head">September 23, 2022</h3>
            </div>
          </div>
          <div className="manager-wallet  auction-tbl  ">
            <div className="manager-heading heading-bg">
              <div className="p-25 ">
                <p>Last Bid By</p>
              </div>
              <div>
                <p>Address</p>
              </div>
              <div className="p-25 ">
                <p>Date</p>
              </div>
            </div>
            <div className="manager-heading detail">
              <div className="p-25 ">
                <p>Sandhya Mer</p>
              </div>
              <div>
                <p>0xe9E861455b...7A0</p>
              </div>
              <div className="p-25 ">
                <p>16 Jun 2022</p>
              </div>
            </div>
            <div className="manager-heading detail">
              <div className="p-25 ">
                <p>Sandhya Mer</p>
              </div>
              <div>
                <p>0xe9E861455b...7A0</p>
              </div>
              <div className="p-25 ">
                <p>16 Jun 2022</p>
              </div>
            </div>
            <div className="manager-heading detail">
              <div className="p-25 ">
                <p>Sandhya Mer</p>
              </div>
              <div>
                <p>0xe9E861455b...7A0</p>
              </div>
              <div className="p-25 ">
                <p>16 Jun 2022</p>
              </div>
            </div>
            <div className="manager-heading detail">
              <div className="p-25 ">
                <p>Sandhya Mer</p>
              </div>
              <div>
                <p>0xe9E861455b...7A0</p>
              </div>
              <div className="p-25 ">
                <p>16 Jun 2022</p>
              </div>
            </div>
            <div className="manager-heading detail">
              <div className="p-25 ">
                <p>Sandhya Mer</p>
              </div>
              <div>
                <p>0xe9E861455b...7A0</p>
              </div>
              <div className="p-25 ">
                <p>16 Jun 2022</p>
              </div>
            </div>
            <div className="manager-heading detail">
              <div className="p-25 ">
                <p>Sandhya Mer</p>
              </div>
              <div>
                <p>0xe9E861455b...7A0</p>
              </div>
              <div className="p-25 ">
                <p>16 Jun 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
