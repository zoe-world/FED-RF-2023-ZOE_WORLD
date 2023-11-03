// 보그 PJ 메인 페이지 JS: main.js

import dFn from './dom.js';

// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";

// [1] 부드러운 스크롤 적용 //////////
startSS();

// [1] 메인 페이지 등장액션 클래스 넣기
// 대상: .main-area section

// 첫번쨰 박스 뺴고 모두 숨김 클래스 넣기
const hideBox = $('.main-area section');
// 제이쿼리 사용코드 : each((idx,ele)=>{})
hideBox.each((idx,ele)=>{
    if(idx!=0) $(ele).addClass('scAct');
}); ///////// each //////////

// JS용 오리지널 코드
// const hideBox = dFn.qsa('.main-area section');
// hideBox.forEach((ele,idx)=>{
//     if(idx!=0)ele.classList.add('scAct');
// }); //////////// foreach /////////////

////////////////////////////////////
// 제이쿼리 라이브러리 사용하여 구현해보자!!!!!

// 1. 스크롤 등장액션 구현하기
// 대상: window 
// 이벤트: scroll 
// 기준값 사용: getBoundingClientRect() -> dFn.getBCR()
// console.log(dFn)
// 등장액션 대상: '.main-area section'
// 기준값 : 윈도우 높이값의 3/2지점
let winH = $(window).height()/3*2;
console.log(winH)

// 스크롤 메뉴 적용대상: .top-area
const topArea = $('#top-area');

// 탑버튼 : .tbtn
const tbtn = $('.tbtn');

$(window).scroll(()=>{
    let scTop = $(window).scrollTop();
    console.log('스크롤~~!!', scTop);

    // 1. 스크롤 위치값이 100을 초과하면 슬림 상단 클래스 넣기
    if(scTop>100) topArea.addClass('on');
    else topArea.removeClass('on');
    
    // 2. 맨위로 이동버튼 300초과시 on
    if(scTop>300) tbtn.addClass('on');
    else tbtn.removeClass('on');
    
    // 3. 등장액션 클래스 적용하기
    hideBox.each((idx,ele)=>{
        if(idx!=0){
            let val = dFn.getBCR(ele);
            // console.log(
            //     `대상요소 BCR top값[${idx}]:, 
            //     ${dFn.getBCR(ele)}`)
            if(val<winH) $(ele).addClass('on');
        }

        // 축약버전 

    }); ////////// each ///////
    
}); /////////////// scroll ///////////

// 맨위로 버튼 클릭시 맨위로 가기
// 부드러운 스크롤 사용하므로 그쪽 함수를 이용함!
tbtn.click((e)=>{
    // a요소 기본이동막기
    e.preventDefault();
    // 부드러운 스크롤 위치값 변경(0)
    setPos(0);
    console.log('나클릭!');
})


