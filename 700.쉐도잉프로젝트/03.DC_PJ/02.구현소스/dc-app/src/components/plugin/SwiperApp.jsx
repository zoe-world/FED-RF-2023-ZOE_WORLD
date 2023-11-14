// 스와이퍼 플러그인 컴포넌트
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/swiper.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 자동넘김, 페이지네이션, 네비게이션 ) 
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export function SwiperApp() {
  const imgArr = [
    "dcm28",
    "dcm29",
    "dcm30",
    "dcm31",
    "dcm32",
    "dcm10",
    "dcm11",
    "dcm12",
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다! */
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imgArr.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={"./images/" + v + ".jpg"} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
} /////////// SwiperApp 컴포넌트 /////
