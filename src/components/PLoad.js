import React, { useState } from "react";
import "./PLoad.css";
// import { ButtonSearch } from "./ButtonSearch";
import axios from "axios";
import { ButtonSearch } from "./ButtonSearch";
// import Form from 'react-bootstrap/Form';
// import { ButtonPAnnounce } from "./ButtonPAnnounce";
// import InputImage from "./InputImage";



function PLoad() {
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
      <div className="load-page">
      <video src='/videos/video3.mp4' autoPlay loop muted></video>
      <h1 className="location"></h1>
        <div className="load-container">
          <div className="load-left">
            <h2 className="headload">LOAD</h2>
            <div className="search-bar">
            {/* <ladel>
                <input
                size="lg" 
                placeholder = 'search' />
            </ladel> */}
            <input type="text" placeholder="Load policy Document" />
            </div>
          
          <ButtonSearch
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'NIZAMABAD'
              >
                SEARCH
              </ButtonSearch>
              </div>
          {/* <div className="load-right">
            <h2>PREDICTIONS</h2>
            <div className="value">
            
            
            </div>
            
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PLoad;
