import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';
import styled from 'styled-components';
import image1 from "../image1.png";
import image2 from "../image2.png";
import image3 from "../image3.png";

// install Swiper modules
SwiperCore.use([Pagination]);

const SwiperWrapper = styled.div`
  position: relative;
   /* Adjust this value to create space below the swiper for the pagination */
`;

const SwiperContainer = styled.div`
  .swiper {
    width: 100%;
    margin-left:8px;
    padding-bottom:100px;
  }



  .swiper-pagination {
    position: absolute;
    bottom: 40px; /* Adjust this value if more space is needed */
    left: 0;
    right: 0;
    text-align: center;
  }

  .swiper-pagination-bullet {
    background: #000;
    opacity: 1; 
  }

  .swiper-pagination-bullet-active {
    background: #007aff;
  }
`;

function SwiperComponent({ className }) {
  return (
    <div className={className}>
    <SwiperWrapper>
    <SwiperContainer>
    <Swiper
        spaceBetween={50}
        slidesPerView={3} 
           pagination={{
          clickable: true,
          type: 'bullets', 
        }}
        modules={[Pagination]} 
      >
        <SwiperSlide>
          <img src={image1} alt="Offer 1" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Offer 2" />
        
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Offer 3" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Offer 2" />
        
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="Offer 1" />
         
        </SwiperSlide>

        
      </Swiper>
    </SwiperContainer>
    </SwiperWrapper>
    </div>
  );
}

export default SwiperComponent;
