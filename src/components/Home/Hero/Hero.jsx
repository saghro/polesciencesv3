import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Hero.css"
import "../../../components/Hero.css"
import "../../../css/library.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero({ slides }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [paginationColor, setPaginationColor] = useState('#f4c20e'); // Initial color

  useEffect(() => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 0); 
      progressContent.current.textContent = '';
    }
  }, []); 

  const onSlideChange = () => {
    // Generate random color or choose from a predefined list
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setPaginationColor(randomColor);
  };

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="background-color: ${paginationColor};"></span>`;
          }
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={onSlideChange}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
         <SwiperSlide key={index} style={{ backgroundImage: `url(${slide.image})` }}>
         <div className="slide-content">
           <h1>{slide.title}</h1>
           <p>{slide.text}</p>
           <button className='btn btn-gradient btn-glow'>{slide.buttonText}</button>
         </div>
       </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </>
  );
}
