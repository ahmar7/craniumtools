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
        <span className="underline"></span>
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
              <tr>
                <th className="p-25">Month</th>
                <th>Staking Revenue</th>
                <th>Raffle Revenue</th>
                <th>Auction Revenue</th>
                <th>Project Revenue</th>
                <th> Staking Projects </th>
                <th>Raffle Projects </th>
                <th className="p-25">Auction Projects</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
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
