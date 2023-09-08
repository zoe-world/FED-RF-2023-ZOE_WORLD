// 도꺠비 PJ 메인 JS - main.js

// DOM 함수 객체 ///////////
const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  // 중간쿼리선택자를 하나 더 만듬
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  // 중간쿼리 전체선택자를 하나 더 만듬
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; ///////// domFn 객체 ///////////

// 로딩구역 호출설정
window.addEventListener("DOMContentLoaded", loadFn);

///// 로딩구역 함수 /////////////
function loadFn() {
  // 호출확인
  console.log("로딩확인");

  // 부드러운 스크롤 적용
  startSS();

  // 부드러운 스크롤 떄문에 마우스휠 이벤트 막기가
  // 작동되어 캐릭터 설명박스 작은 스크롤도 작동안됨!
  // 따라서 이벤트 버블링을 막아줘야함!!
  // event.stopPropagation() 그만전파하지마
  // 이벤트 객체의 이벤트 버블링 막아주는 메서드임!

  // 대상 : .desc-box
  let desc_box = document.querySelectorAll(".desc-box");
  console.log(desc_box);
  // 모든 캐릭터 설명박스는 이벤트 버블링 막기!
  // -> 여기서 마우스휠 됨!
  desc_box.forEach((ele) => {
    // ele 요소자신
    ele.onwheel = (e) => e.stopPropagation();
  });

  /******************************************************** 
    [ 현장포토파트 데이터 구성하기 ]
    -배열데이터를 이용하여 HTML코드 구성
*******************************************************/
  // 1. 대상선정: .live-box
  const liveBox = domFn.qs(".live-box");
  console.log("대상:", liveBox);

  // 2. 현장포토 데이터를 기반으로 HTML 코드 만들기
  let hcode = "<ul>";

  // 반복코드 만들기///
  // 현장포토 데이터 data_drama.js 에서 가져옴
  liveData.forEach((val) => {
    // html 변수에 속성넣기
    hcode += `<li>
        <figure>
            <img src="./images/live_photo/${val.imgName}.jpg" alt="${val.title}">
            <figcaption>${val.title}</figcaption>
        </figure>
    </li>`;
  }); /////// forEach ///////////
  hcode += "</ul>";

  console.log(hcode);

  // 3. 대상박스에 html 코드 넣기
liveBox.innerHTML = hcode;


} ///////// loadFn 함수 ////////////
///////////////////////////////////
