import React, { useState } from "react";
import "./PAdjust.css";
// import { ButtonSearch } from "./ButtonSearch";
import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import { ButtonPAnnounce } from "./ButtonPAnnounce";
// import InputImage from "./InputImage";

function PAdjust() {
  const [state, setState] = useState(false);
  let url =
    "https://internal.imd.gov.in/section/nhac/dynamic/FAQ_heat_wave.pdf";
  const [data, setdata] = useState("");
  // let urln = window.location.href.split("/");
  // var option = urln.pop();
  // var location = urln.pop();
  const [value1, onChange1] = useState(1);
  const [value2, onChange2] = useState(1);
  const [value3, onChange3] = useState(1);
  // const [value4, onChange4] = useState(1);
  // function APIcall(month) {
  //   console.log(location);  
  //   var backend_URL = `http://localhost:8000/Districts/Predictions/${option.toUpperCase()}/${location}/${month}`;
  //   axios
  //     .get(backend_URL)

  //     .then(function(response) {
  //       console.log(response);
  //       setdata(response.data);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }
  return (
    <>
      <div className="adjust-page">
        <video src="/videos/video3.mp4" autoPlay loop muted></video>
        <h1 className="location"></h1>
        <div className="adjust-container">
          <div className="adjust-left">
            <h2 className="headadjust">ADJUSTMENTS</h2>
            <div className="adjust-bar">
              <div className="slider-parent">
                <h3 style={{color: "white"}}>Number of Trees:</h3>
                <input
                  type="range"
                  min="1"
                  max="5000"
                  value={value1}
                  onChange={({ target: { value: radius } }) => {
                    onChange1(radius);
                  }}
                />
              </div>
              <div className="slider-parent">
                <h3 style={{color: "white"}}>Rainfall:</h3>
                <input
                  type="range"
                  min="1"
                  max="5000"
                  value={value2}
                  onChange={({ target: { value: radius } }) => {
                    onChange2(radius);
                  }}
                />
              </div>
              <div className="slider-parent">
                <h3 style={{color: "white"}}>Population:</h3>
                <input
                  type="range"
                  min="1"
                  max="5000"
                  value={value3}
                  onChange={({ target: { value: radius } }) => {
                    onChange3(radius);
                  }}
                />
              </div>
              <div className="image-adjust">
                <img src="download (1).png" alt="image" />
              </div>
              {/* <div className="slider-parent">
                <h3 style={{color: "white"}}>Temperature:</h3>
                <input
                  type="range"
                  min="1"
                  max="5000"
                  value={value4}
                  onChange={({ target: { value: radius } }) => {
                    onChange4(radius);
                  }}
                />
              </div> */}
            </div>
          </div>
          {/* <div className="adjust-right">
            <h2>PREDICTIONS</h2>
            <div className="value">
            
        
            </div>
            
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PAdjust;
