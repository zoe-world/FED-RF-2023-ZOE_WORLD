// 공통함수 JS - dom.js

// DOM 함수 객체 ///////////
// const domFn = {
// 객체를 바로 내보내기
export default {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    // 중간쿼리선택자를 하나 더 만듬
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    // 중간쿼리 전체선택자를 하나 더 만듬
    qsaEl: (el, x) => el.querySelectorAll(x),

    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

    // 바운딩위치값함수
    getBCR: (ele) => ele.getBoundingClientRect().top,

    // 옵셋탑값 반환함수
    getOT: (ele) => ele.offsetTop,
}; ///////// domFn 객체 ///////////