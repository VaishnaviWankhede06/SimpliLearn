


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules'; 
import img1 from './Images/AWS_Home.svg';
import img2 from './Images/iitRoorkee_Home.svg';
import img3 from './Images/iitmadras_Home.svg';
import img4 from './Images/Caltech_Home.svg';
import img5 from './Images/IITG_Home.svg';
import img6 from './Images/Miscrosoft_Home.svg';
import img7 from './Images/Purdue_Home.svg';
import img8 from './Images/SPJain_Home.svg';
import img9 from './Images/iimindore_Home.svg';

const UnivercityCarousel = () => {
  const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9 ];

  return (
    <div className="carousel-container " style={{ textAlign: 'center', marginTop:'3rem'}}>
      <p style={{ marginBottom: '20px', fontFamily:'Roboto, sans-serif', color:'rgb(39, 44, 55)'}}>Partnering with the world's leading universities and companies</p>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        slidesPerGroup={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} style={{ width: '200px', height: '160px', objectFit: 'contain' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnivercityCarousel;
/*

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules'; // Import modules
import img1 from './Images/AWS_Home.svg';
import img2 from './Images/iitRoorkee_Home.svg';
import img3 from './Images/iitmadras_Home.svg';
import img4 from './Images/Caltech_Home.svg';
import img5 from './Images/IITG_Home.svg';
import img6 from './Images/Miscrosoft_Home.svg';
import img7 from './Images/Purdue_Home.svg';
import img8 from './Images/SPJain_Home.svg';
import img9 from './Images/iimindore_Home.svg';

const UnivercityCarousel = () => {
  const images = [
    { src: img1, width: '200px', height: '160px' },
    { src: img2, width: '220px', height: '180px' },
    { src: img3, width: '240px', height: '200px' },
    { src: img4, width: '260px', height: '220px' },
    { src: img5, width: '280px', height: '240px' },
    { src: img6, width: '300px', height: '260px' },
    { src: img7, width: '320px', height: '280px' },
    { src: img8, width: '340px', height: '300px' },
    { src: img9, width: '360px', height: '320px' }
  ];

  return (
    <div className="carousel-container" style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Partnering with the world's leading universities and companies</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        slidesPerGroup={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img 
              src={img.src} 
              alt={`Slide ${index + 1}`} 
              style={{ width: img.width, height: img.height, objectFit: 'contain' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnivercityCarousel;*/

