import React, { useState } from "react";
import "./Collateral.css";
import { ButtonSearch } from "./ButtonSearch";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { ButtonPAnnounce } from "./ButtonPAnnounce";
import InputImage from "./InputImage";



function Collateral() {
  const [state,setState]=useState(false);
  let url="https://internal.imd.gov.in/section/nhac/dynamic/FAQ_heat_wave.pdf";
  const [data, setdata]= useState('')
  let urln = window.location.href.split('/')
  var option = urln.pop()
  var location = urln.pop()
  function APIcall(month) {
    console.log(location)
    var backend_URL = `http://localhost:8000/Districts/Predictions/${option.toUpperCase()}/${location}/${month}`
    axios.get(backend_URL,)

    .then(function (response) {
      console.log(response);
      setdata (response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
      <div className="collateral-page">
      <video src='/videos/video3.mp4' autoPlay loop muted></video>
      <h1 className="location"></h1>
        <div className="collateral-container">
          {/* <div className="collateral-left">
            <h2 className="head">SEARCH</h2>
            <div className="collateral-bar">
            ggh
            </div>
          </div> */}
          <div className="collateral-right">
            <h2>IMPACTS</h2>
            <div className="value">
            {/* <input type="text" name="name" /> */}
            <div className="image-collateral">
            <img src="collateral1.jpeg"></img>
            <img src="collateral2.jpeg"></img>
            <img src="collateral3.jpeg"></img>
            </div>
            {data.HeatWave && <>
            Occurence: {data.HeatWave}<br/>
            Maximum Temperature: {data.Max_Temp}<br/>
            <div className="image-contain">
              {/* <img src="images/heatlevel.jpeg"  width={250} height={200} ></img> */}
              <img src="images/heatwave.jpg"  width={250} height={200} ></img>
            </div>
            <p>Check this <a href='https://internal.imd.gov.in/section/nhac/dynamic/FAQ_heat_wave.pdf' target="_blank">link</a> for IMD report.</p>
            </>}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Collateral;
