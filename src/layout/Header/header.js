import React from 'react';
import { Logo } from '../../utils/allImgs';
import { Link } from 'react-router-dom';
import "./header.css"
const Header = () => {
    return (
      <div className="main-container">
        <div className="header me">
          <div className="left-colmn">
            <ul className="nav-ul">
              <li>
                <Link to="">
                  <img src={Logo} alt="" />
                </Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Experiments</Link>
              </li>
              <li>
                <Link to="">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="right-colmn">
            <button className="panel-btn">
              <Link to="dashboard">Project Panel</Link>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Header;
