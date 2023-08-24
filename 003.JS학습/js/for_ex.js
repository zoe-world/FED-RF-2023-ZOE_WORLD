// for문 연습1 : 외부 js파일 - for_ex.js

// js외부파일은 html 문서에 직접 들어가 작동되므로 css처럼 'utf-8' 같은 인코딩
// 설정이 필요없다!

// 1. 대상선정 //////

// 1-1. 이벤트 대상 : 미니언즈
var mini = document.querySelectorAll(".mini");

// 1-2. 출력대상 : 파란박스안에 미니언즈 박스
var blue_box = document.querySelector(".mini-space");

// 1-3. 개수출력대상 : h2.stxt > span
var cnt_spot = document.querySelector(".stxt span");

// 1-4. 리셋버튼대상 : .rbtn
var btn_reset = document.querySelector(".rbtn");

console.log("미니언즈", mini, blue_box,cnt_spot,btn_reset);

// 2. 이벤트 연결하기

// 2-1. 미니언즈 이미지 클릭시 넣기함수 호출
// mini[0].onclick = insertMini;

// 기본 for 문
// for(시;한;증){코드}
// (0부터 시작; 개수보다 작을 때까지 반복; 1씩 증가)
for (var i = 0; i < mini.length; i++) {
    mini[i].addEventListener("click", insertMini);
    console.log("for문내 i", i);
} ////////// for /////////////

console.log("for문밖 i", i);

// 2-2. 리셋버튼 함수와 연결
btn_reset.addEventListener("click", resetMini);

// 3. 함수 만들기 /////////////////

// 3-1. 미니언즈 넣기 함수
/*******************************
        함수명 : insertMini
        기능 : 미니언즈 이미지 개수만큼 넣기
    *******************************/
function insertMini() {
    // 1. 호출확인
    // console.log('미니넣어!', this);
    // this는 나자신! -> 호출한 .mini

    // 2. 셋팅된 개수 속성(data-cnt) 가져오기
    var cnt = this.getAttribute("data-cnt");
    // getAttribute(속성명) -> 속성값 가져오기! 내장함수
    // console.log('data-cnt:', cnt)

    // 3. 미니언즈 넣기!
    // 대상 : .Bcase -> blue_box
    // for(시;한;증){코드}
    // (0부터;개수보다 작을때까지; 1씩증가)
    for (var j = 0; j < cnt; j++) {
        // 대입연산자(+=)로 기존데이터에 합침
        blue_box.innerHTML += `
            <img src="./images/Minions.png" alt="미니언즈">
            `;
    } ////////////// for //////////////////

    // 4. 현재 박스에 있는 미니언즈 개수 찍기//////////
    // 읽어올 대상 : .mini-space -> blue_box변수
    var count_mini = blue_box.querySelectorAll("img").length;
    // querySelectorAll() 전체 하위 이미지수집
    // length -> 전체개수읽기
    console.log("미니언즈 수 : ", count_mini, typeof count_mini);
    // typeof 변수 -> 변수의 데이터형 출력!!

    // 출력 대상 : h2.stxt > span -> cnt_spot
    // 미니언즈가 개당 3개씩 이므로 *3
    cnt_spot.innerText = count_mini * 3;
} ////// insertMini 함수 ///////////
////////////////////////////////////

/**********************************************************
    함수명 : resetMini
    기능 : 파란박스의 미니언즈 이미지 삭제
            + 미니언즈 숫자 초기화!

 **********************************************************/
function resetMini() {
    // 1. 호출확인
    console.log("리셋이양");
    // 2. 파란박스 미니언즈 이미지 삭제
    // 대상 : blue_box
    blue_box.innerHTML = '';
    // 3. 미니언즈 개수 초기화
    // 대상 : cnt_spot 변수
    cnt_spot.innerText = '0';
} ///////////// resetMini 함수 //////////////////
///////////////////////////////////////////////////
