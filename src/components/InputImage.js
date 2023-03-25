import React from 'react'
import { useState } from "react";
import './InputImage.css';
import axios from "axios";

const InputImage = () => {
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
      // setFile(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  

  return (
    <div className="model">
      <h2>Add Image:  </h2><br></br>
      <input accept="image/*" type="file" onChange={handleChange} />
      {/* <img src={file} /> */}
    </div>
  )
}

export default InputImage