import React, { useState } from "react";
import "./Model.css";
import { ButtonSearch } from "./ButtonSearch";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { ButtonPAnnounce } from "./ButtonPAnnounce";
import InputImage from "./InputImage";



function Model() {
  const [state,setState]=useState(false);
  // let url=`http://127.0.0.1:8000/apigeo/`;
  const [res, setdata]= useState('')
  let urln = window.location.href.split('/')
  var option = urln.pop()
  var location = urln.pop()
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    var backend_URL = 'http://127.0.0.1:8000/apigeo/';
    var form_data = new FormData();
    form_data.append('image', e.target.files[0]);
    console.log(form_data)
    axios.post(backend_URL, form_data)
    .then(function (response) {
      console.log(response);
      APIcall(response.data.id);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  function APIcall(ID) {
    axios.get(`http://127.0.0.1:8000/apigeo/${ID}`,)

    .then(
      res => {
        setdata(res.data.result)
      }
    )
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
      <div className="search-page">
      <video src='/videos/video3.mp4' autoPlay loop muted></video>
      <h1 className="location"></h1>
        <div className="search-container">
          <div className="search-left">
            <h2 className="head">UPLOAD</h2>
            <div className="image-bar">
              <h2>Add Image:  </h2><br></br>
              <input accept="image/*" type="file" onChange={handleChange} />
            </div>
          </div>
          <div className="search-right">
            <h2>RESULTS</h2>
            <div className="value">
              {res && <>
                <h3>Number of Trees: {res}</h3>
                <h4>Woods: {Math.round(0.7 * res)}</h4>
                <h4>Flowering Plants: {Math.round(0.1 * res)}</h4>
                <h4>Medicinal Plants: {Math.round(0.2 * res)}</h4>
                <div className="output-image">
                  <img src="map2020.jpeg" alt="Resultant Image" />
                </div>
              </>}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
