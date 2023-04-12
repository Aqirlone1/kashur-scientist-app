import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper";
import {  Autoplay } from "swiper";
import "swiper/css/scrollbar";

export default function Slider(
    featuredIn1,
    featuredIn2,
    featuredIn3,
    featuredIn4,
    featuredIn5,
    featuredIn6,
    featuredIn7,
    featuredIn8,
) {
  return (
    <div>  <Swiper
    slidesPerView={3}
    spaceBetween={40}
    // enables autoplay
    autoplay={{ delay: 1000,disableOnInteraction:false }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination, Autoplay]}
    className="mySwiper"

  >
    <SwiperSlide><img src={featuredIn1} alt=""  /></SwiperSlide>
    <SwiperSlide><img src={featuredIn2} alt=""  /></SwiperSlide>
    <SwiperSlide><img src={featuredIn3} alt=""  /></SwiperSlide>
    <SwiperSlide><img src={featuredIn4} alt=""  /></SwiperSlide>
    <SwiperSlide><img src={featuredIn5} alt=""  /></SwiperSlide>
    <SwiperSlide><img src={featuredIn6} alt=""  /></SwiperSlide>
    <SwiperSlide><img src={featuredIn7} alt=""  /></SwiperSlide>
    <SwiperSlide><img src={featuredIn8} alt=""  /></SwiperSlide>
  </Swiper>
</div>
  )
}




