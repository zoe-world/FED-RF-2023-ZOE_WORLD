// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!

import React from "react";
import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";

// Context API 불러오기
import { dcCon } from "../modules/dcContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

export function Layout() {

  // 랜더링 후 (화면보이기전) 실행구역 //////////
  useLayoutEffect(()=>{
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0,0)
  }); ///////// useEffect ////////

// 라우터 이동객체설정
const goNav = useNavigate();


// 라우터 이동함수: pgName - 페이지이름 / param -전달값
const chgPage = (pgName,param) => goNav(pgName,param);

/**************************
컨텍스트 api 공유값 설정
1. chgpage 함수 : 라우터 이동기능이 들어가 있는 함수임
(이걸 통해 네비게이션을 누르면 이동할 수 있음)
**************************/

// 리턴코드 ///////////
return (
<dcCon.Provider value={{ chgPage }}>
  <TopArea />
  <MainArea />
  <FooterArea />
</dcCon.Provider>
);
}