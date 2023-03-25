import React from "react";
import "./Policyicons.css";
import { ButtonLoad } from "./ButtonLoad";
import { ButtonPTest } from "./ButtonPTest";
import { ButtonPAdjust } from "./ButtonPAdjust";
import { ButtonPAutotune } from "./ButtonPAutotune";
import { ButtonPAnnounce } from "./ButtonPAnnounce";
// import { setdata } from "./data/data";

function Policyicons() {
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
                <img src="images/loadpolicy.png"></img>
              </div>
              <ButtonLoad
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'KARIMNAGAR'
              >
                LOAD POLICY GUIDELINES
              </ButtonLoad>
            </div>
            <div className="service-card">
              <div className="image-container2">
                <img src="images/testpolicy.png"></img>
              </div>
              {/* <button className="booking-btn">ADILABAD</button> */}
              <ButtonPTest
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'ADILABAD'
                
              >
                TEST POLICY IMPACTS
              </ButtonPTest>
            </div>
            <div className="service-card">
              <div className="image-container2">
                <img src="images/policyadjust.png"></img>
              </div>
              {/* <button className="booking-btn">KHAMMAM</button> */}
              <ButtonPAdjust
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'KHAMMAM'
              >
                POLICY ADJUSTMENTS
              </ButtonPAdjust>
            </div>
          </div>
          <div className="service-cards1">
            <div className="service-card">
              <div className="image-container2">
                <img src="images/pautotune.png"></img>
              </div>
              {/* <button className="booking-btn">WARANGAL</button> */}
              <ButtonPAutotune
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'WARANGAL'
              >
                AUTOTUNE POLICY
              </ButtonPAutotune>
            </div>
            <div className="service-card">
              <div className="image-container2">
                <img src="images/pannounce.png"></img>
              </div>
              {/* <button className="booking-btn">NIZAMABAD</button> */}
              <ButtonPAnnounce
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'NIZAMABAD'
              >
                ANNOUNCE POLICY
              </ButtonPAnnounce>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Policyicons;
