import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Options from './components/pages/Options';
import Forestoptions from './components/pages/Forestoptions';
import Policyoptions from './components/pages/Policyoptions';
import Search from './components/pages/Search';
import ForestModel from './components/pages/ForestModel';
// import ForestPredict from './components/pages/ForestPredict';
import ForestGrowth from './components/pages/ForestGrowth';
import ForestMap from './components/pages/ForestMap';
import ForestCollateral from './components/pages/ForestCollateral';
import PolicyLoad from './components/pages/PolicyLoad';
import TestPolicy from './components/pages/TestPolicy';
import PolicyAdjust from './components/pages/PolicyAdjust';
import PolicyAutotune from './components/pages/PolicyAutotune';
import PolicyAnnounce from './components/pages/PolicyAnnounce';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/options' element={<Options/>} />
          <Route path='/forestoptions/*' element={<Forestoptions/>} />
          {/* <Route path='/select/*' element={<Heatwave/>} /> */}
          <Route path= '/policyoptions/*' element={<Policyoptions/>} />
          <Route path= '/search/*' element={<Search/>} />
          <Route path= '/forestmodel/*' element={<ForestModel/>} />
          <Route path= '/growth/*' element={<ForestGrowth/>} />
          <Route path= '/map/*' element={<ForestMap/>} />
          <Route path= '/collateral/*' element={<ForestCollateral/>} />
          <Route path= '/load/*' element={<PolicyLoad/>} />
          <Route path= '/test/*' element={<TestPolicy/>} />
          <Route path= '/padjust/*' element={<PolicyAdjust/>} />
          <Route path= '/pautotune/*' element={<PolicyAutotune/>} />
          <Route path= '/pannounce/*' element={<PolicyAnnounce/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
