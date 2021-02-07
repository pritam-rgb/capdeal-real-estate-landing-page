import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Hamber from './components/Hamber';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import WriteToUs from './components/WriteToUs';
import { InfoData } from './data/infoData';
import { sliderData } from './data/sliderData';
import GlobalStyle from './globalStyles';
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
      
      <WriteToUs />
    </>
  );
}

export default App;
