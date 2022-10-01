import React from "react";
import { Link } from "react-router-dom";
import { Vector } from "../../../utils/allImgs";
import "./token.css";
const Token = () => {
  return (
    <div className="mb section-bg token-config container-link">
      <div className="token-bg tbl-width   ">
        <div className=" no-border">
          <br />
          <br />
          <div className="project-heading">
            <h3>Configure SPL-Token</h3>
            <p>
              Here you need to connect your custom SPL tokens that you will use
              to reward staked holders, <br /> receive raffle tokens, and
              auction tokens.
            </p>
          </div>
        </div>
        <div className="scroll-tbl">
          <table>
            <thead>
              <th className="p-25">Token Symbol</th>
              <th>Address</th>
              <th>Decimal Points</th>
              <th>Balance</th>
              <th>Action</th>
            </thead>
            <tr className="no-border">
              <td className="p-25 bold-text no-border">$SOL</td>
              <td className="no-border">
                22mwV4x...76 <img className="vector-img" src={Vector} alt="" />
              </td>
              <td className="no-border"> 9</td>
              <td className="no-border">0</td>

              <td className="p-25 no-border">
                <button class="container-btn">
                  <Link to="#">Remove</Link>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Token;
