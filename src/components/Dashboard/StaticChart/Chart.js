import React from 'react';
import { ChartIcon1, ChartIcon2, ChartIcon3, ChartIcon4 } from '../../../utils/allImgs';
import "./chart.css"
const Chart = () => {
    return (
      <div className="mb mt main-static">
        <div className="heading-section">
          <h3>
            Statistics <span className="banner-c">Chart</span>
          </h3>
          <span class="underline"></span>
          <p>
            is committed to creating a new generation of grade NFT projects
            across
            <br /> the Web3 space. We will do this by providing efficient,
            convenient, secure,
          </p>
        </div>
        <div className="e-blocks me  ">
          <div className="c-e-block">
            <img src={ChartIcon1} alt="" />
            <h3>1000</h3>
            <p>Staking Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon1} alt="" />
            <h3>1000</h3>
            <p>Raffle Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon1} alt="" />
            <h3>1000</h3>
            <p>Auction Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon1} alt="" />
            <h3>1000</h3>
            <p>Total Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon2} alt="" />
            <h3>1000</h3>
            <p>Daily Staking Revenue</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon2} alt="" />
            <h3>1000</h3>
            <p>Daily Raffle Revenue</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon2} alt="" />
            <h3>1000</h3>
            <p>Daily Auction Revenue</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon2} alt="" />
            <h3>1000</h3>
            <p>Total Daily Revenue</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon3} alt="" />
            <h3>1000</h3>
            <p>Weekly Staking Revenue</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon3} alt="" />
            <h3>1000</h3>
            <p>Weekly Raffle Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon3} alt="" />
            <h3>1000</h3>
            <p>Weekly Auction Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon3} alt="" />
            <h3>1000</h3>
            <p>Total Weekly Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon4} alt="" />
            <h3>1000</h3>
            <p>Monthly Staking Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon4} alt="" />
            <h3>1000</h3>
            <p>Monthly Raffle Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon4} alt="" />
            <h3>1000</h3>
            <p>Monthly Auction Projects</p>
          </div>
          <div className="c-e-block">
            <img src={ChartIcon4} alt="" />
            <h3>1000</h3>
            <p>Total Monthly Projects</p>
          </div>
        </div>
      </div>
    );
}

export default Chart;
