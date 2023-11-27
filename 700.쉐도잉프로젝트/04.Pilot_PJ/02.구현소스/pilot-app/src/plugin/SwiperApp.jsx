// 스와이퍼 플러그인 컴포넌트
import React, { useRef, useState } from "react";
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

export function SwiperApp(props) {

  // 리스트만들기 함수
  const makeList = (num)=>{
    let temp = [];
    for(let x=0; x<num;x++){
      temp[x] = 
      <SwiperSlide key={x}>
        <img src={"./images/sub/" + props.cat + "/banner/ban"+(x+1)+".png"} alt="" />
    </SwiperSlide>
    } /////// for 문 //////////////

    // 배열로 리턴
    return temp

  } ///////// makeIst 함수


  // 리턴코드 //////////////////
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
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
        {makeList(props.cat =="style"?5:3)}
      </Swiper>
      {/* useRef 테스트버튼 */}
        </>
  );
} /////////// SwiperApp 컴포넌트 /////
