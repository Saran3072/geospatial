import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';

function Herosection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video3.mp4' autoPlay loop muted></video>
      <div className='content'>
      {/* <p className='slide1'>Team ORBIT LOADERS presents</p> */}
       <h1 className='slide1name'>Urban Forestry Analytics</h1>
       <p className='slide1'>Forests play a crucial role in maintaining the balance of our planet's ecosystem. However, the growth and decay of forests are influenced by various factors such as climate change, human activities, and policy decisions. Accurately predicting the growth or decay of forests is essential for sustainable forest management and for mitigating the impacts of deforestation on the environment. Currently, manual analysis and modeling techniques for forest prediction are time-consuming and have limited accuracy in considering the complex interplay of social, policy, and environmental factors.</p>
       {/* <p className='slide1'>We're excited to offer a cutting-edge solution for individuals, environmental agencies, and policymakers who need accurate monthly heatwaves and air quality index predictions in a specific location. </p> */}
       <p className='slide1'>To address this challenge, we propose the development of an automated machine learning driven framework for predicting forest growth/decay that includes a collateral effects analysis of social and policy aspects.</p>
       <p className='slide2'>Empowering cities with data-driven insights for a greener tomorrow.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LET'S GO
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
