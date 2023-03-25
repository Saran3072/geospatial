import React, { useState } from "react";
import "./Growth.css";
import { ButtonSearch } from "./ButtonSearch";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { ButtonPAnnounce } from "./ButtonPAnnounce";
import InputImage from "./InputImage";



function Growth() {
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
      <div className="grow-page">
      <video src='/videos/video3.mp4' autoPlay loop muted></video>
      <h1 className="location"></h1>
        <div className="grow-container">
          <div className="grow-left">
            <h2 className="head">IMAGES</h2>
            <div className="grow-bar">
                <div className="image-forest">
            <img src="forest2020.jpeg"></img>
            <img src="forest2021.jpeg"></img>
            <img src="forest2022.jpeg"></img>
            </div>
            </div>
          </div>
          <div className="grow-right">
            <h2>NUMBER OF TREES</h2>
            <div className="value">
            {/* <input type="text" name="name" /> */}
            
            <br/>
            <br/>
            <br/>
            In the Year of 2020:<br/>1514 Trees<br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            In the Year of 2021:<br/>1350 Trees<br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            In the Year of 2022:<br/>1231 Trees
            
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

export default Growth;
