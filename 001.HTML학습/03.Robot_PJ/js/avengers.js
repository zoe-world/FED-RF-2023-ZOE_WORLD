// 어벤져스 JS - avengers.js

// 공통 DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

window.addEventListener('wheel', (e)=>{
    //기본기능 막기:
    e.preventDefault();
    // 이벤트 호출확인
    console.log('휠~~',e.wheelDelta);
    // 휠방향 분기 -event.wheelDelta 는 휠방향알림(마이너스는 아랫방향)
    //페이지 이동하기
    window.scrollTo(0,window.innerHeight*(e.wheelDelta<0?1:0));
    //window.innerHeight*(e.wheelDelta<0?1:0)
    // --> 풀이 : 윈도우높이값*e.wheelDelta 값이 음수면 1을 곱하고, 양수면 0을 곱해라!
    // 아랫방향은 윈도우 높이값*1만큼 가고 윗방향은 윈도우높이값*0 만큼 가라(즉 0곱하면0이기 때문에, 위로 올라가라)
},{passive:false})
// passive:false 설정값 변경을 해야 
// window, document, body 이 세가지 중요객체에 대하여 막기설정을 할 수 있음
//모바일떄문에 passive:true로 기본값이 바뀌었기 때문에!!

// 추가: 위의 기능 자동스크롤 이동 시 유튜브 동영상 박스위에서 스크롤 하면 자동스크롤 기능이 안됨
// 따라서 유튜브 박스 영역에서 wheel 하면 휠을 막아줘야함
// 이벤트는 위로 전달되므로 (이벤트버블링) 이를 막아준다!
// 막는 방법은 
// 그만해 stop
// 전파를 propagation ->> event.stopPropagation()
// qs('.trailer-box').addEventListener('wheel',(e)=>{
//     e.stopPropagation();
// })


//초기 데이터 셋팅하기
//데이터 : 어벤저스 데이터 - data.js > character

// console.log(character);


// 어벤저스 캐릭터 박스 셋팅하기
// 대상선정 : .avergers-box
const avengers = qs(".avergers-box");
console.log("대상:", avengers);

// 2. 데이터 자동 순회하여 태그만들기
// html 코드 변수
let hcode = "";

// 주석순번
let num = 1;

// 3. html 코드를 만들어준다 //////
for (let x in character) {
    // 변수 x는 객체의 속성이다.
    // 객체값은 객체변수[x]
    // console.log(x,'/',character[x]);

    // num 이 3이상일 때, .txt에 .right 를 추가함!
    hcode += `
    <!-- ${num} ${x} -->
    <div class="hero">
        <!-- 이미지 -->
        <img src="./ab_img/${character[x]['이미지명']}.png" alt="${x}">
        <!-- 소개글박스 -->
        <article class="txt${num>=3?' right':''}">
            <div>
                <h3>${x}</h3>
                <p>${character[x]['설명']}</p>
            </div>
        </article>
    </div>
    `;

    // 주석번호 증가
    num++;
} ///////// for in ///////////


// 생성된 html 확인
console.log(hcode);

// 3. 대상에 html 넣어 출력하기
avengers.innerHTML = hcode;

// 4. 로딩후 2초후 avengers박스에 클래스 on 넣기
setTimeout(()=>{
    avengers.classList.add('on');
}, 2000);


// 5. 타이틀 애니를 위해 한글자씩 싸기 
// 로딩후 3초뒤 tit에다가 span태그로 감싼 후, 하나씩 떨어지기

// 1. 대상선정 : .t1
let mytit = qs('.t1');
let mytext = mytit.innerText; 
let newOne = '';

// for of 문으로 한글자씩 순회하기
for(let x of mytext){
    console.log(x);
    newOne += `<span>${x}</span>`;
} ///////// for of ///////////////

console.log(newOne)
// 다시 타이틀에 넣기
mytit.innerHTML = newOne;

// 생성된 span요소 선택
let new_span = qsa('.t1 span');

// 셋팅된 span 요소를 돌면서 하나씩 transition-delay시간
// 일정시간 간격으로 주기!
new_span.forEach((ele,idx)=>{
    ele.style.transitionDelay = (0.05*idx) +'s';
})

// 어벤저스 박스 나올때까지(5초) 기다린 후
// span 의 transform 변경하기 -> class를 안 줄 경우(97,98 같이 처리해야됨),
// + .hero 오버시 설정 적용되도록 어벤저스 박스에 
// class active 넣기!
setTimeout(()=>{
    mytit.classList.add('on');
    avengers.classList.add('active');
    // for(let x of new_span) 
    // x.style.transform = 'translateY(0) scale(1)';
},5000);



/************************************************* 
    [ 객체를 위한 for in 문 ]

    - 구문: 
    for(변수 in 객체){코드}

    - 작동원리:
    객체의 개수만큼 순서대로 속성명과 속성값을 가져옴

    - 변수는 객체의 속성명이다!

    - 객체의 값을 사용하려면 for in 문 안에
        객체[변수] 로 쓰면됨!

*************************************************/

