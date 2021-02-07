import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Hamber from './components/Hamber';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoData } from './data/infoData';
import { sliderData } from './data/sliderData';
import GlobalStyle from './globalStyles';
import CaptureDetails from './components/CaptureDetails';
import { FooterContainer } from './containers/footer';
function App() {

  const [isOpen,setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hamber slides={sliderData} />
      <InfoSection {...InfoData} />
      <CaptureDetails />
      <FooterContainer />
    </>
  );
}

export default App;
