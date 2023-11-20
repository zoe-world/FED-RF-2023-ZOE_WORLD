// 비디오스와이프 하위 스와이퍼 플러그인 컴포넌트
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

/* 제이쿼리 넣기 */
import $ from 'jquery';

// Import Swiper styles
import "swiper/css";
// 양쪽 이동버튼만 필요함!
import "swiper/css/navigation";

/* 폰트어썸 임포트 */
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 스와이퍼 CSS
import "./css/swiper_vid.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 네비게이션 ) 
import { Navigation } from "swiper/modules";

import { swVidData } from "../data/swiper_vid"; 

export function SwiperVid() {
  
  const selData = swVidData;

  // 비디오 보이기 함수
  const showVid = (src,tit) => {
    // src - 비디오경로, tit - 비디오제목
    console.log(src,tit);
    // 1. 대상선정
    // 1-1. 아이프레임 : .play-vid iframe
    const ifr = $('.play-vid iframe');
    // 1-2. 전체 박스 : .vid-bx
    const vbx = $('.vid-bx');
    // 1-3. 타이틀 박스 : ..ifr-tit
    const itit = $('.ifr-tit');
    // 1-4. 닫기 버튼 : .cbtn
    const cbtn = $('.cbtn');

    // 2. 변경하기
    // 2-1. 아이프레임 src 로 넣기
    ifr.attr('src',src+"?autoplay=1");
    // 2-2. 비디오 타이틀 넣기
    itit.text(tit);
    // 2-3. 비디오 전체박스 보이기
    vbx.fadeIn(300);
    // 2-4. 닫기버튼 셋팅
    cbtn.click(()=>{
      vbx.fadeOut(300);
      //기존동영상 플레이 멈추기(src 삭제)
      ifr.removeAttr('src');
    })

  }; //////// showVid 함수 /////////

  // 리턴코드 ///////////
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다! */
        modules={[Navigation]}
        className="mySwiper"
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{
          200: {
              slidesPerView: 1,
          },
          500: {
              slidesPerView: 2,
          },
          1000: {
              slidesPerView: 3,
          },
          1200: {
              slidesPerView: 4,
          },
      }}
      >
        {selData.map((v, i) => (
          <SwiperSlide key={i}>
            {/* 눌렀을 때, 비디오 보이기 함수 호출(비디오경로, 비디오제목) */}
            <section className="sw-inbox" onClick={()=>showVid(v.vsrc,v.tit)}>
              {/* 동영상이미지박스 */}
              <div className="vid-img">
                <img src={v.isrc} alt={v.tit} />
                {/* 폰트어썸 */}
                <FontAwesomeIcon 
                  icon={faCirclePlay}
                  style={{
                    position:'absolute',
                    bottom:'55%',
                    left:'10%',
                    color:'#fff',
                    fontSize:'50px'
                  }}
                  
                />
              </div>
              {/* 동영상타이틀박스 */}
              <div className="vid-tit">
                <h4>{v.cat}</h4>
                <h3>{v.tit}</h3>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
} /////////// SwiperVid 컴포넌트 /////
