import React from "react";
import "./projecName.css";
import { Link } from "react-router-dom";
const ProjectName = () => {
  return (
    <div className="pname mb section-bg mt">
      <div className="heading-section">
        <h3>Project Name</h3>
      </div>
      <div className="project-container">
        <div className="project-heading">
          <h3>Configure Project</h3>
          <span class="underline"></span>
          <p>Configure the projects socials below!</p>
        </div>
        <form className="project-form" action="">
          <div className="input-container">
            <label>Twitter URL</label>
            <input
              type="text"
              placeholder="Twitter URL"
              required
              className="project-input"
            />
          </div>
          <div className="input-container">
            <label>Discord URL</label>
            <input
              type="text"
              placeholder="Discord URL"
              required
              className="project-input"
            />
          </div>
          <div className="input-container">
            <label>Description</label>
            <input
              type="text"
              placeholder="Description"
              required
              className="project-input"
            />
          </div>
          <div className="submit-btn">
            
            <button className="panel-btn primary-btn">
              <Link to="#">Apply Changes</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectName;
