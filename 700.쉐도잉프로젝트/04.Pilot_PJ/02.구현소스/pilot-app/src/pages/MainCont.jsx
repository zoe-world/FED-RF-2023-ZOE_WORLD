// 메인페이지 컨텐츠 컴포넌트

import { useEffect } from "react";
import { Banner } from "../modules/Banner";

// 자동스크롤 JS 불러오기
import { autoScroll } from "../func/jquery-autoScroll";

// 제이쿼리 호출
import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');


export function MainCont(){

    // 메인 페이지 일때만 자동스크롤 기능 적용함!
    useEffect(()=>{ // 랜더링 후 한번만 적용
        console.log('랜더링ok!');
        // 자동스크롤 호출
        // autoScroll();

        // 드래그 기능넣기
        // 대상: .slide 
        const slide = $('.slide');
        // 커버
        const cover = $('.cover');
        // 드래그 기능넣기
        slide.draggable({axis:'x'})

        // 드래그가 끝났을 때 슬라이드 위치
        slide.on('dragstop',()=>{

            // 광드래그 막기 커버
            cover.show();

            // 비교를 위한 윈도우 가로값 
            let winW = $(window).width();
            // 현재 슬라이드 left 값
            let pos = slide.offset().left;
            // 이동 차이수 = 현재 슬라이드 위치값(양수로 변환) - 윈도우 가로값 = 
            let diff = Math.abs(pos) - winW;
            // 결과해석: 양수면 왼쪽 음수면 오른쪽으로 이동
            
            // 기준값 : 화면크기를 기준한 부분
            let gap = winW/10;

            console.log('드래그 멈춤',pos,winW,diff);

            // 왼쪽으로 이동하기
            if(diff>gap){
                slide.animate({ left:'-200%' },
                800,
                'easeOutQuint',
                ()=>{
                    // 맨앞li 맨 뒤로 이동
                    slide.append(slide.find('li').first())
                    // left값 -100%(처음값)
                    .css({left:"-100%"})
                    // cover 제거
                    cover.hide();
                })
            } //////// if /////
            //오른쪽으로 이동하기
            else if(diff<-gap){
                slide.animate({ left:'0' },
                800,
                'easeOutQuint',
                ()=>{
                     // 맨앞li 맨 앞로 이동
                     slide.prepend(slide.find('li').last())
                     // left값 -100%(처음값)
                     .css({left:"-100%"})
                    // cover 제거
                    cover.hide();
                })
            } //////// else if /////
            else{
                slide.animate({ left:'-100%' },
                800,
                'easeOutQuint',
                ()=>{// cover 제거
                    cover.hide();
                })
                
                
            }
        }); /////////// dragstop ///////


    },[]); //////////// useEffect /////////

    return(
        <>
            {/* 1. 배너페이지 */}
            <section id="ban" className="page" style={{backgroundColor:"lightblue"}}>
                {<Banner/>}
            </section>
            <section className="page" style={{backgroundColor:"lightgray"}}></section>
            <section className="page" style={{backgroundColor:"lightgreen"}}></section>
            <section className="page" style={{backgroundColor:"lightseagreen"}}></section>
            <section className="page" style={{backgroundColor:"lightpink"}}></section>
        </>
    )
} ///////////MainCont 컴포넌트 ///////