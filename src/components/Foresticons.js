import React from "react";
import "./Foresticons.css";
import { Button1 } from "./Button1";
import { ButtonModel } from "./ButtonModel";
import { ButtonGrowth } from "./ButtonGrowth";
import { ButtonMap } from "./ButtonMap";
import { ButtonCollateral } from "./ButtonCollateral";
// import { setdata } from "./data/data";

function Foresticons() {
  return (
    <>
      <div className="boxes">
        <video src="/videos/video3.mp4" autoPlay loop muted></video>
        <div className="service">
          <h1></h1>
          {/* <p className="outer-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p> */}
          <div className="service-cards">
            <div className="service-card">
              <div className="image-container2">
                <img src="images/search.png"></img>
              </div>
              <Button1
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'KARIMNAGAR'
              >
                SEARCH DATASETS
              </Button1>
            </div>
            <div className="service-card">
              <div className="image-container2">
                <img src="images/model.png"></img>
              </div>
              {/* <button className="booking-btn">ADILABAD</button> */}
              <ButtonModel
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'ADILABAD'
                
              >
                BUILD ANALYSIS MODEL
              </ButtonModel>
            </div>
            <div className="service-card">
              <div className="image-container2">
                <img src="images/predict.png"></img>
              </div>
              {/* <button className="booking-btn">KHAMMAM</button> */}
              <ButtonGrowth
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'KHAMMAM'
              >
                PREDICT FOREST GROWTH / DECAY
              </ButtonGrowth>
            </div>
          </div>
          <div className="service-cards1">
            <div className="service-card">
              <div className="image-container2">
                <img src="images/map.png"></img>
              </div>
              {/* <button className="booking-btn">WARANGAL</button> */}
              <ButtonMap
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'WARANGAL'
              >
                MAP FOREST COORDINATES
              </ButtonMap>
            </div>
            <div className="service-card">
              <div className="image-container2">
                <img src="images/collateral.png"></img>
              </div>
              {/* <button className="booking-btn">NIZAMABAD</button> */}
              <ButtonCollateral
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'NIZAMABAD'
              >
                COLLATERAL IMPACTS
              </ButtonCollateral>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Foresticons;
