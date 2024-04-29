import React from "react";

import DoctorImageSrc from '../NicePng.png'; // Adjust the path as needed
import styled from "styled-components";

const MainContainer = styled.main`
  background: linear-gradient(81deg, #e7f0ff 9.01%, rgba(232, 241, 255, 0.47) 89.11%);
  padding: 80px;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ContentSection = styled.section`
  flex: 1;
  margin-top: 81px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Subtitle = styled.h2`
  color: #2aa7ff;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0.72px;
  line-height: 68px;
  @media (max-width: 991px) {
    font-size: 31px;
  }
`;

const Title = styled.h1`
  color: #000;
  font-size: 56px;
  font-weight: 700;
`;

const TitleHighlight = styled.span`
  color: #2aa7ff;
`;

const Description = styled.p`
  color: #5c6169;
  font-size: 20px;
  letter-spacing: 0.4px;
  line-height: 32px;
  margin-top: 38px;
`;

const FindCentersButton = styled.button`
  background-color: #2aa8ff;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.32px;
  margin-top: 36px;
  padding: 12px 36px;
  @media (max-width: 991px) {
    padding: 12px 20px;
  }
`;

const ImageSection = styled.section`
  flex: 1;
  position: relative;
`;

const BackgroundImage = styled.img`
  height: 100%;
  inset: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;

const DoctorImage = styled.img`
  aspect-ratio: 0.88;
  margin-top: -43px;
  object-fit: contain;
  position: relative;
  width: 100%;
  z-index: 1;
`;

function MedicalCenters() {
  return (
    <MainContainer>
      <FlexContainer>
        <ContentSection>
          <Subtitle> Skip the travel! Find Online <br /> 
            <Title> Medical <TitleHighlight>Centers</TitleHighlight> </Title>
          </Subtitle>
          <Description> Connect instantly with a 24x7 specialist or choose to video visit a particular doctor. </Description>
          <FindCentersButton>Find Centers</FindCentersButton>
        </ContentSection>
        <ImageSection>
          
          <DoctorImage src={DoctorImageSrc} alt="Doctor" />
        </ImageSection>
      </FlexContainer>
    </MainContainer>
  );
}

export default MedicalCenters;
