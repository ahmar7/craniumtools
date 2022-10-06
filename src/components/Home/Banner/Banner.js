import React from "react";
import "./banner.css";
import { HeaderImg } from "../../../utils/allImgs";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="main-banner  mb mt">
        <div className="landing-header">
          <div className="left-colmn">
            <h3 className="banner-heading">
              Building <br /> Utility Made <br />
              <span className="banner-c">Free</span>
            </h3>
            <p className="banner-para">
              Integrate benefits into your project hassle-free. <br /> We offer
              a variety of services for you to choose from!
            </p>

            <button className="building-btn ">
              <Link to="/building">Start Building</Link>
            </button>
          </div>
          <div className="right-colmn">
            <img className="banner-img" src={HeaderImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
