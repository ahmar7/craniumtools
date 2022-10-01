import React from "react";
import { Link } from "react-router-dom";
import "./rafel.css";
import { Delete, Edit, Img, Plus } from "../../../utils/allImgs";
const Raffle = () => {
  return (
    <div className="pname mb   mt">
      <div className="project-container">
        <div className="project-heading">
          <h3>Configure Raffle</h3>
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
              <label>Total Raffle Tickets</label>
              <input
                type="text"
                className="raffle-input"
                placeholder="Total Raffle Tickets"
              />
            </div>
            <div className="raffle-inputcontainer">
              <label>Max Raffle Tickets Per User</label>
              <input
                type="text"
                className="raffle-input"
                placeholder="Max Raffle Tickets Per User"
              />
            </div>
            <div className="raffle-inputcontainer">
              <label>Ticket Cost Per User</label>
              <input
                type="text"
                className="raffle-input"
                placeholder="Ticket Cost Per User"
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
            <div className="raffle-inputcontainer">
              <label>End Date</label>
              <input
                type="date"
                className="raffle-input"
                placeholder="End Date"
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
};

export default Raffle;
