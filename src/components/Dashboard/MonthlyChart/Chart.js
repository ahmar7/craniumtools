import React from "react";
import { Link } from "react-router-dom";
import { Delete } from "../../../utils/allImgs";
import "./chart.css";
const Chart = () => {
  return (
    <div className="mb mt main-static">
      <div className="heading-section">
        <h3>
          <span className="banner-c">Monthly</span> Statistics Chart
        </h3>
        <span class="underline"></span>
        <p>
          is committed to creating a new generation of grade NFT projects across{" "}
          <br /> the Web3 space. We will do this by providing efficient,
          convenient, secure,
        </p>
      </div>

      <div className="manager-wallet tbl-width   ">
        <div className="manager-heading no-border">
          <div className="p-25 ">
            <h3>Monthly Statistics Chart</h3>
          </div>
          <div className="input  p-25"></div>
        </div>
        <div className="scroll-tbl">
          <table>
            <thead>
              <th className="p-25">Month</th>
              <th>Staking Revenue</th>
              <th>Raffle Revenue</th>
              <th>Auction Revenue</th>
              <th>Project Revenue</th>
              <th> Staking Projects </th>
              <th>Raffle Projects </th>
              <th className="p-25">Auction Projects</th>
            </thead>
            <tr>
              <td className="p-25">September</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> X</td>
              <td> X</td>
              <td className="p-25"> X</td>
            </tr>
            <tr>
              <td className="p-25">October</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> X</td>
              <td> X</td>
              <td className="p-25"> X</td>
            </tr>
            <tr>
              <td className="p-25">November</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> X</td>
              <td> X</td>
              <td className="p-25"> X</td>
            </tr>
            <tr>
              <td className="p-25">December</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> X</td>
              <td> X</td>
              <td className="p-25"> X</td>
            </tr>
            <tr>
              <td className="p-25">January</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> X</td>
              <td> X</td>
              <td className="p-25"> X</td>
            </tr>
            <tr>
              <td className="p-25">February</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> X</td>
              <td> X</td>
              <td className="p-25"> X</td>
            </tr>
            <tr>
              <td className="p-25">March</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> X</td>
              <td> X</td>
              <td className="p-25"> X</td>
            </tr>
            <tr>
              <td className="p-25">April</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> X</td>
              <td> X</td>
              <td className="p-25"> X</td>
            </tr>
            <tr>
              <td className="p-25">May</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> $X</td>
              <td> X</td>
              <td> X</td>
              <td className="p-25"> X</td>
            </tr>
          </table>
        </div>
        <div className="manager-heading">
          <div className="p-25 "></div>
          <div className="input  p-25">
            <p>Rows Per Page</p>
            <p>1-10 of 276</p>
            <p className="sp"> &lt; </p>
            <p className="sp">&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

{
  /* <div className="manager-heading heading-bg">
            <div className="p-25 ">
              <p>Month</p>
            </div>
            <div>
              <p>Staking Revenue</p>
            </div>
            <div>
              <p>Raffle Projects</p>
            </div>
            <div>
              <p>Auction Revenue</p>
            </div>
            <div>
              <p>Project Revenue</p>
            </div>
            <div>
              <p>Staking Projects</p>
            </div>

            <div>
              <p>Raffle Revenue</p>
            </div>
            <div className="p-25 ">
              <p>Auction Projects</p>
            </div>
          </div>
          <div className="manager-heading charte detail">
            <div className="p-25 mnth ">
              <p>September</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div className="p-25 ">
              <p>X</p>
            </div>
          </div>
          <div className="manager-heading charte detail">
            <div className="p-25 mnth ">
              <p>October</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div className="p-25 ">
              <p>X</p>
            </div>
          </div>
          <div className="manager-heading charte detail">
            <div className="p-25 mnth ">
              <p>November</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div className="p-25 ">
              <p>X</p>
            </div>
          </div>
          <div className="manager-heading charte detail">
            <div className="p-25 mnth ">
              <p>December</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div className="p-25 ">
              <p>X</p>
            </div>
          </div>
          <div className="manager-heading charte detail">
            <div className="p-25 mnth ">
              <p>January</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div className="p-25 ">
              <p>X</p>
            </div>
          </div>
          <div className="manager-heading charte detail">
            <div className="p-25 mnth ">
              <p>February</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div className="p-25 ">
              <p>X</p>
            </div>
          </div>
          <div className="manager-heading charte detail">
            <div className="p-25 mnth ">
              <p>March</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div className="p-25 ">
              <p>X</p>
            </div>
          </div>
          <div className="manager-heading charte detail">
            <div className="p-25 mnth ">
              <p>April</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div className="p-25 ">
              <p>X</p>
            </div>
          </div>
          <div className="manager-heading charte detail">
            <div className="p-25 mnth ">
              <p>May</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>$X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div>
              <p>X</p>
            </div>
            <div className="p-25 ">
              <p>X</p>
            </div>
          </div> */
}
