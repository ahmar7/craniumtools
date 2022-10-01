import React from 'react';
import { Link } from "react-router-dom";
import "./auction.css";
import { Delete, Edit, Img, Plus } from "../../../utils/allImgs";
const Auction = () => {
    return (
      <div className="pname mb section-bg   mt">
        <div className="project-container ">
          <div className="project-heading">
            <h3>Configure Auction</h3>
            <span class="underline"></span>
            <p>Configure the projects auction or create one for them!</p>
          </div>
          <form className="raffle-form" action="">
            <div className="colmn-left raffle-block">
              <label htmlFor="upload">
                Choose NFT
                <br />
                <div className="image-picker">
                  <img src={Plus} alt="" />
                </div>
                <input type="file" id="upload" style={{ display: "none" }} />
              </label>
            </div>
            <div className="colmn-right raffle-block">
              <div className="raffle-inputcontainer no-gap">
                <label>Starting Price</label>
                <input
                  type="text"
                  className="raffle-input"
                  placeholder="Starting Price"
                />
              </div>
              <div className="raffle-inputcontainer  ">
                <label>Increment</label>
                <input
                  type="text"
                  className="raffle-input"
                  placeholder="Increment"
                />
              </div>
              <div className="raffle-inputcontainer">
                <label>Duration</label>
                <input
                  type="text"
                  className="raffle-input"
                  placeholder="Duration"
                />
              </div>
              <div className="raffle-inputcontainer">
                <label>Grace Period</label>
                <input
                  type="text"
                  className="raffle-input"
                  placeholder="Grace Period"
                />
              </div>
              <div className="raffle-inputcontainer">
                <label>Start Date</label>
                <input
                  type="date"
                  className="raffle-input"
                  placeholder="Start Date"
                />
              </div>
              
              <div className="raffle-btn ">
                <button className="panel-btn primary-btn">
                  <Link to="#">Create Raffle</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="profile-card">
          <div className="card">
            <img className="dp" src={Img} alt="" />
            <div className="card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div className="img-side">
                <img className="card-edit" src={Edit} alt="" />
                <img className="card-delete" src={Delete} alt="" />
              </div>
            </div>
            <div className="click-btn">
              <button>REFUND RAFFLE</button>
            </div>
          </div>
          <div className="card">
            <img className="dp" src={Img} alt="" />
            <div className="card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div className="img-side">
                <img className="card-edit" src={Edit} alt="" />
                <img className="card-delete" src={Delete} alt="" />
              </div>
            </div>
            <div className="click-btn">
              <button>REFUND RAFFLE</button>
            </div>
          </div>
          <div className="card">
            <img className="dp" src={Img} alt="" />
            <div className="card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div className="img-side">
                <img className="card-edit" src={Edit} alt="" />
                <img className="card-delete" src={Delete} alt="" />
              </div>
            </div>
            <div className="click-btn">
              <button>REFUND RAFFLE</button>
            </div>
          </div>
          <div className="card">
            <img className="dp" src={Img} alt="" />
            <div className="card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div className="img-side">
                <img className="card-edit" src={Edit} alt="" />
                <img className="card-delete" src={Delete} alt="" />
              </div>
            </div>
            <div className="click-btn">
              <button>REFUND RAFFLE</button>
            </div>
          </div>
          <div className="card">
            <img className="dp" src={Img} alt="" />
            <div className="card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div className="img-side">
                <img className="card-edit" src={Edit} alt="" />
                <img className="card-delete" src={Delete} alt="" />
              </div>
            </div>
            <div className="click-btn">
              <button>REFUND RAFFLE</button>
            </div>
          </div>
          <div className="card">
            <img className="dp" src={Img} alt="" />
            <div className="card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div className="img-side">
                <img className="card-edit" src={Edit} alt="" />
                <img className="card-delete" src={Delete} alt="" />
              </div>
            </div>
            <div className="click-btn">
              <button>REFUND RAFFLE</button>
            </div>
          </div>
          <div className="card">
            <img className="dp" src={Img} alt="" />
            <div className="card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div className="img-side">
                <img className="card-edit" src={Edit} alt="" />
                <img className="card-delete" src={Delete} alt="" />
              </div>
            </div>
            <div className="click-btn">
              <button>REFUND RAFFLE</button>
            </div>
          </div>
          <div className="card">
            <img className="dp" src={Img} alt="" />
            <div className="card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div className="img-side">
                <img className="card-edit" src={Edit} alt="" />
                <img className="card-delete" src={Delete} alt="" />
              </div>
            </div>
            <div className="click-btn">
              <button>REFUND RAFFLE</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Auction;
