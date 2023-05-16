import React, {useState, useEffect} from "react";
import Rome from "../assets/Rome.png"
import London from "../assets/london.png"
import FullEurope from "../assets/fullEurpe.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Destination = () => {

  
    
  
    return (
      <div className="py-12">
        <h3 className="text-center text-3xl">TRAVEL TO YOUR BEST DESTINATIONS</h3>
           <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,  A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={Rome} alt="" className="m-auto" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={London} alt="" className="m-auto"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={Rome} alt="" className="m-auto" />
      </SwiperSlide>
    </Swiper>
      </div>
  );
};

export default Destination;




  
  
  
  
  
  
  