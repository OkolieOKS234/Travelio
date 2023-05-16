import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Book = () => {
  return (
    <section>
      <div className="container">
          <h3 className="text-3xl">Book your trip in 3 ways</h3>
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
        <p>Book</p>
      </SwiperSlide>
      <SwiperSlide>
      <p>PROCESS</p>
      </SwiperSlide>
      <SwiperSlide>
      <p>TRY</p>
      </SwiperSlide>
    </Swiper>
    </div>
    </section>
  );
};

export default Book;
