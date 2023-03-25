import React from "react";
import "./Blocks.css";
import { Button2 } from "./Button2";
import { Button3 } from "./Button3";

function Block() {
  return (
    <>
      <div className="block-card">
       <video src='/videos/video3.mp4' autoPlay loop muted></video> 
       <h1></h1>
        <div className="prediction-container">
          <div className="prediction-cards">
            <div className="prediction-card">
              <div className="image-container1">
                <img src="images/forest.jpg" alt=""></img>
              </div>

              <Button2
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={console.log("hey")}
                path = 'heatwaves'
              >
                FOREST ANALYTICS
              </Button2>
            </div>
            <div className="prediction-card">
              <div className="image-container1">
                <img src="images/policy.jpg"></img>
              </div>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={() => {}}
                path = 'aqi'
              >
                POLICY ANALYTICS
              </Button3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Block;
