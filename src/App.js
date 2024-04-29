import React from 'react';
import Header from './components/Header';
import Logomed from './components/Logomed';
import Message from './components/Message';
import MedicalCenters from './components/MedicalCenters';
import Selectdoctor from './components/Selectdoctor';
import SwiperComponent from './components/SwiperComponent';
import styled from 'styled-components';
import Specialisation from './components/Specialisation';
import OurMedicalSpecialist from './components/OurMedicalSpecialist';
import './App.css';

const OverlayWrapper = styled.div`
  position: relative;
`;

const StyledSelectdoctor = styled(Selectdoctor)`
  position: absolute;
  top: 602px; 
  left: 50%; 
  transform: translateX(-50%); 
  width: 90%; 
  z-index: 2;
`;

const StyledSwiperComponent = styled(SwiperComponent)`
  position: absolute;
  top: 400px; 
  left: 50%;
  transform: translateX(-50%);
  width: 100%; 
  z-index: 1; 
`;

function App() {
  return (
    <div className='app'>
      <Message />
      <div className='top'>
        <Logomed />
        <Header />
      </div>
      
      <OverlayWrapper>
        <MedicalCenters />
        <StyledSelectdoctor />        
      </OverlayWrapper>
      <OverlayWrapper>
      <StyledSwiperComponent/>
      </OverlayWrapper>
      <div className="special">
      <Specialisation/ >
      </div>
      <div className='our'>
      <OurMedicalSpecialist/>
      </div>
    </div>
  );
}

export default App;
