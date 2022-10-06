import React from "react";
import { Link } from "react-router-dom";
import "./configure.css";
const Configure = () => {
  return (
    <div className=" pt pm section-bg">
      {" "}
      <div className="project-container">
        <div className="project-heading">
          <h3>Set-Up Your Page</h3>
          <span class="underline"></span>
          <p>
            Please make sure you are signed in with the correct wallet before
            proceeding. Having Issues? <br /> Reach out to us on Discord to
            assist with the matter!
          </p>
        </div>
        <form className="project-form" action="">
          <div className="input-container">
            <label>Project Name | 100 Characters</label>
            <input
              type="text"
              placeholder="Project Name"
              required
              className="project-input"
            />
          </div>
          <div className="input-container">
            <label>PFP URL</label>
            <input
              type="text"
              placeholder="PFP URL"
              required
              className="project-input"
            />
          </div>
          <div className="input-container">
            <label>Header URL</label>
            <input
              type="text"
              placeholder="Header URL"
              required
              className="project-input"
            />
          </div>
          <div className="input-container ic">
            <label>Staking Page URL</label>
            <input
              type="text"
              value="Https://"
              required
              className="project-input"
            />
            <span className="domain">.cranium.io</span>
          </div>
          <br />
          <div className=" ">
            <Link to="/configuration/project">
              {" "}
              <button className="panel-btn primary-btn">Launch Page</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Configure;
