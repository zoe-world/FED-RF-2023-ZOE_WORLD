// 메인페이지 컨텐츠 컴포넌트

import { useEffect } from "react";
import { Banner } from "../modules/Banner";

// 자동스크롤 JS 불러오기
import { wheelFn,evtFn, initSet, zeroPno } from "../func/jquery-autoScroll";
// 드래그 배너 JS 불러오기
import { dragBanner } from "../func/drag_banner";
import { FashionIntro } from "../modules/FashionIntro";
// 제이쿼리 호출
import $ from "jquery";

export function MainCont() {
  // 메인 페이지 일때만 자동스크롤 기능 적용함!
  useEffect(() => {
    // 랜더링 후 한번만 적용
    // console.log('랜더링ok!');
    // 스크롤바 없애기 
    $('html,body').css({overflow:'hidden'});

    // ((중요!!!!))
    // 특정이벤트를 설정해제하고자 할때
    // 반드시 그 이벤트 설정은 JS파일 내부에서 하지 말고
    // 리액트 함수에서 JS 함수를 호출하는 형태로 해야
    // 해제메서드인 removeEventListener가 유효하다
    // 자동스크롤 호출
    window.addEventListener("wheel", wheelFn);

    // 메뉴+인디케이터 이벤트 기능설정 함수 호출
    evtFn();

    // 초기화 함수 호출
    initSet();

    // 페이지번호 초기화 호출
    zeroPno();

    // 드래그배너 호출
    dragBanner();

    // 컴포넌트 소멸자 : 이 컴포넌트가 삭제될 때 호출됨
    return () => {
      console.log("난 소멸했어");
      // 이 페이지에서만 필요했던 자동스크롤 이벤트를 해제
      window.removeEventListener("wheel", wheelFn);

      // 메인 페이지에만 사용되는 로고클릭시 상단이동 이벤트 해제
      // 제이쿼리로 특정요소에 걸어준 경우 해제는 off(이벤트명)
      $("#logo a").off('click');
      $(".gnb li").off('click').removeClass('on')
      $(document).off('keydown');
    };
  }, []); //////////// useEffect /////////

  return (
    <>
      {/* 1. 배너페이지 */}
      <section
        id="ban"
        className="page nonesel"
        style={{ backgroundColor: "lightblue" }}
      >
        {<Banner />}
      </section>
      {/* 2. 남성패션 페이지 */}
      <section className="page">
        <FashionIntro cat="men" />
      </section>
      {/* 3. 여성패션 페이지 */}
      <section className="page">
        <FashionIntro cat="women" />
      </section>
      {/* 4. 스타일패션 페이지 */}
      <section className="page">
        <FashionIntro cat="style" />
      </section>
      {/* 메인에만 나오는 사이드 인디케이터 */}
      <nav className="indic">
        <ul>
          <li className="on">
            <a href="#ban">
              <span>배너</span>
            </a>
          </li>
          <li className="">
            <a href="#men">
              <span>남성의류</span>
            </a>
          </li>
          <li className="">
            <a href="#women">
              <span>여성의류</span>
            </a>
          </li>
          <li className="">
            <a href="#style">
              <span>스타일</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
} ///////////MainCont 컴포넌트 ///////
