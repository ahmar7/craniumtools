import React from "react";
import "./footer.css";
import { Discord, Twitter } from "../../utils/allImgs";
const Footer = () => {
  return (
    <div className="main-container">
      <div className="footer">
        <div id="contact" className="footer-block">
          <img src={Discord} alt="" />
          <div className="social-detail">
            <h3>Discord Server</h3>
            <p>
              Have any questions or concerns? Feel free to contact us via
              Discord!
            </p>
            <a href="">Discord</a>
          </div>
        </div>
        <div className="footer-block f-mar">
          <img src={Twitter} alt="" />
          <div className="social-detail">
            <h3>Twitter Server</h3>
            <p>
              Have any questions or concerns? Feel free to contact us via
              Twitter!
            </p>
            <a href="">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
