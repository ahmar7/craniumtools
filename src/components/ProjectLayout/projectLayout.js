import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Layoutbg,
  Dp,
  Twittersmall,
  Discordsmall,
  Img,
  Cross,
} from "../../utils/allImgs";
import "./projectlayout.css";
const ProjectLayout = () => {
  const [auction, setAuction] = useState(false);
  const [staking, setStaking] = useState(true);
  const [raffles, setRaffles] = useState(false);
  const [live, setLive] = useState(true);
  const [end, setEnd] = useState(false);
  let toggleAuction = () => {
    setAuction(true);
    setRaffles(false);
    setStaking(false);
  };
  let togglStaking = () => {
    setRaffles(false);
    setAuction(false);
    setStaking(true);
  };
  let togglRaffles = () => {
    setStaking(false);
    setAuction(false);
    setRaffles(true);
  };
  let goLive = () => {
    setLive(true);
  };
  let goEnd = () => {
    setLive(false);
  };
  // Nft Modal
  const [nftmodal, setNftModal] = useState(false);
  const [nftisActive, setNftIsActive] = useState(false);

  const toggleNft = () => {
    setNftModal(true);

    setNftIsActive(false);
  };
  const closeNft = () => {
    setNftIsActive(true);
    setTimeout(() => {
      setNftModal(false);
    }, 300);
  };
  if (nftmodal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="me layout-area">
      <div className="layout-background">
        <img src={Layoutbg} alt="" />
      </div>
      <div className="dp-area">
        <div className="circle-dp">
          <img src={Dp} alt="" />
        </div>
        <div className="social-dp">
          <a href="">
            <img src={Twittersmall} alt="" />
          </a>
          <a href="">
            <img src={Discordsmall} alt="" />
          </a>
        </div>
      </div>
      <div className="skull-area">
        <h3>Skull NFT</h3>
        <p>
          Kiwami is a collection of 10,000 avatars for a next-generation
          collective of artists, builders, and rule-breakers. Carefully designed
          in the metaverse & born in Japan, holders have access to exclusive
          Kiwami offerings and the opportunity to shape our collective future.
          Join us in Chasing the Tsunami.
        </p>
      </div>
      <div className="layout-switch">
        <button
          onClick={toggleAuction}
          className={auction ? " border-active " : ""}
        >
          AUCTIONS
        </button>
        <button
          onClick={togglStaking}
          className={staking ? " border-active " : ""}
        >
          STAKING
        </button>
        <button
          onClick={togglRaffles}
          className={raffles ? " border-active " : ""}
        >
          RAFFLES
        </button>
      </div>
      <div className={auction ? "active-detail " : " disable-detail "}>
        <div className="layout-detail">
          <div className="staking">
            <div className="left-block"></div>
            <div className="left-block">
              <button
                onClick={goLive}
                className={
                  live ? "panel-btn primary-btn " : " panel-btn  no-bg"
                }
              >
                Live
              </button>
              <button
                onClick={goEnd}
                className={
                  live ? " panel-btn  no-bg" : "panel-btn primary-btn "
                }
              >
                Ended
              </button>
            </div>
          </div>
        </div>
        <div className="profile-modal-card align-left">
          <div
            className={
              live
                ? " modal-card layout-card disable-detail"
                : "modal-card layout-card active-detail"
            }
          >
            <img className="dp" src={Img} alt="" />
            <div className="modal-card-head layout-card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
            </div>
            <div className="layout-card-btn bg-clr">
              <p className="light-weight">
                {" "}
                <Link to="/auction">AUCTION WINNER</Link>
              </p>
              <p className="normal-weight"> 22mwV4x...76</p>
            </div>
          </div>
          <div
            className={
              live
                ? "modal-card layout-card active-detail"
                : " modal-card layout-card disable-detail"
            }
          >
            <img className="dp" src={Img} alt="" />
            <div className="modal-card-head  ">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div>
                <h3 className="royal-blue">1 $SOL</h3>
              </div>
            </div>
            <div className="modal-card-head  ">
              <div>
                <p className="no-pad">Highest Bid</p>
                <h3>100 $PRDX</h3>
              </div>
              <div></div>
            </div>
            <div className="layout-card-btn bg-change">
              <p className="light-weight">
                <Link to="/auction">VIEW AUCTION</Link>
              </p>
              <p className="normal-weight"> Ends in 16:06:17</p>
            </div>
          </div>
        </div>
      </div>
      <div className={staking ? "active-detail " : " disable-detail "}>
        <div className="layout-detail">
          <div className="staking">
            <div className="left-block">
              <div className="blck">
                <h3>0 Staked</h3>
                <p>Yours Staked</p>
              </div>
              <div className="blck">
                <h3>0 Staked</h3>
                <p>Total Staked - 1%</p>
              </div>
              <div className="blck">
                <h3>0.00 $SOL</h3>
                <p>Daily Rewards</p>
              </div>
            </div>
            <div className="left-block">
              <button onClick={toggleNft} className="panel-btn primary-btn">
                Stake NFTs{" "}
              </button>
              <button className="panel-btn danger-btn">Unstake All</button>
            </div>
          </div>
        </div>
        <div className="profile-modal-card align-left">
          <div className="modal-card layout-card">
            <img className="dp" src={Img} alt="" />
            <div className="modal-card-head layout-card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
            </div>
            <div className="layout-card-btn">
              <button className="danger-btn">Unstake</button>
              <button className="success-btn">Claim</button>
            </div>
          </div>
          <div className="modal-card layout-card">
            <img className="dp" src={Img} alt="" />
            <div className="modal-card-head layout-card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
            </div>
            <div className="layout-card-btn">
              <button className="danger-btn">Unstake</button>
              <button className="success-btn">Claim</button>
            </div>
          </div>
          <div className="modal-card layout-card">
            <img className="dp" src={Img} alt="" />
            <div className="modal-card-head layout-card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
            </div>
            <div className="layout-card-btn">
              <button className="danger-btn">Unstake</button>
              <button className="success-btn">Claim</button>
            </div>
          </div>
        </div>
      </div>

      <div className={raffles ? "active-detail " : " disable-detail "}>
        <div className="layout-detail">
          <div className="staking">
            <div className="left-block"></div>
            <div className="left-block">
              <button
                onClick={goLive}
                className={
                  live ? "panel-btn primary-btn " : " panel-btn  no-bg"
                }
              >
                Live
              </button>
              <button
                onClick={goEnd}
                className={
                  live ? " panel-btn  no-bg" : "panel-btn primary-btn "
                }
              >
                Ended
              </button>
            </div>
          </div>
        </div>
        <div className="profile-modal-card align-left">
          <div
            className={
              live
                ? " modal-card layout-card disable-detail"
                : "modal-card layout-card active-detail"
            }
          >
            <img className="dp" src={Img} alt="" />
            <div className="modal-card-head layout-card-head">
              <div>
                <h3>NFT Name 1</h3>
              </div>
            </div>
            <div className="layout-card-btn bg-clr">
              <p className="light-weight">
                <Link to="/raffle">RAFFLE winner</Link>
              </p>
              <p className="normal-weight"> 22mwV4x...76</p>
            </div>
          </div>
          <div
            className={
              live
                ? "modal-card layout-card active-detail"
                : " modal-card layout-card disable-detail"
            }
          >
            <img className="dp" src={Img} alt="" />
            <div className="modal-card-head  ">
              <div>
                <h3>NFT Name 1</h3>
              </div>
              <div>
                <h3 className="royal-blue">1 $SOL</h3>
              </div>
            </div>
            <div className="modal-card-head  ">
              <div>
                <p className="no-pad">totall tickets</p>
                <h3>166</h3>
              </div>
              <div>
                <p className="no-pad">sold tickets</p>
                <h3 className=" ">166</h3>
              </div>
            </div>
            <div className="layout-card-btn bg-change">
              <p className="light-weight">
                <Link to="/raffle">VIEW RAFFLE</Link>
              </p>
              <p className="normal-weight"> Ends in 16:06:17</p>
            </div>
          </div>
        </div>
      </div>
      {nftmodal && (
        <div className={nftisActive ? "modalup modal" : "modal"}>
          <div
            onClick={toggleNft}
            className={nftisActive ? "overlayup overlay" : "overlay"}
          ></div>
          <div className="modal-content">
            <div className="project-modal">
              <div className="project-heading special">
                <br />

                <h3>Choose NFTs</h3>
                <span class="underline"></span>
                <p>
                  Please make sure you are signed in with the correct wallet
                  before proceeding. Having Issues? <br /> Reach out to us on
                  Discord to assist with the matter!
                </p>
              </div>
              <div className="profile-modal-card">
                <div className="modal-card">
                  <img className="dp" src={Img} alt="" />
                  <div className="modal-card-head">
                    <div>
                      <h3>NFT Name 1</h3>
                    </div>
                  </div>
                </div>
                <div className="modal-card">
                  <img className="dp" src={Img} alt="" />
                  <div className="modal-card-head">
                    <div>
                      <h3>NFT Name 1</h3>
                    </div>
                  </div>
                </div>
                <div className="modal-card">
                  <img className="dp" src={Img} alt="" />
                  <div className="modal-card-head">
                    <div>
                      <h3>NFT Name 1</h3>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <br />
              <div className="  ">
                <button onClick={closeNft} className="panel-btn primary-btn">
                  Select NFT
                </button>
                <br />
                <br />
              </div>
              <div className="close-modal" onClick={closeNft}>
                <img src={Cross} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectLayout;
