// 아이스크림 갤러리 JS - icecream.js

$(() => {
    ////////////// jQB /////////////
    // 요규사항 : 아이스크림 갤러리를 드래그하여
    // 이동시키며 양끝에 이동한계를 설정한다!
    // 0.화면크기 업데이트
    const undataWin = () => $(window).width();

    // 0. 최초 윈도우가로크기 업데이트
    let winW = undataWin();

    // 트랜지션 시간설정
    const TRS_TIME_DT = ".8s ease-out";
    const TSR_TIME_MOB = ".3s ease-out";
    // 이징에 IN이 들어가면 처음에 답답함!

    // 1. 대상선정: #move
    // - 아이스크림 리스트를 모두 담고 있는 박스
    const target = $("#move");
    // 2. 변경내용 : 제이쿼리UI 드래그 설정하기
    target
        .draggable({
            axis: "x", // x국고정
        })
        //타겟에 트랜지션 설정
        .css({
            transition: TRS_TIME_DT,
        }); ////////// CSS //////////

    // 2-3.한계값 설정하기

    // 2-3-1. 윈도우 리사이즈시 업데이트
    $(window).resize(() => {
        winW = undataWin();
        // console.log('업데이트화면가로크기',winW);
        firstPoint = winW / 3;
        console.log("첫번째 한계값", firstPoint);

        lastPoint = target.width() - (winW / 3) * 2;
        console.log("마지막 한계값", lastPoint);

        // 트랜지션 모바일/DT 크기체크 전환
        target.css({
            transition: winW < 500 ? TSR_TIME_MOB : TRS_TIME_DT,
        });
    }); //////// resize ////////////

    // -> 트랜지션 뫄=바일/DT 크기일 떄 전환하기
    // 위에서 설정하였으므로 만약 모바일크기범위이면
    // 아래값으로 덮어씀
    if (winW < 500) target.css({
        transition: TSR_TIME_MOB
    });

    // console.log('처음화면가로크기',winW);

    // 2-3-4. 첫번째 한계값 설정하기 : 화면크기의 1/3로 설정
    let firstPoint = winW / 3;
    console.log("첫번째 한계값", firstPoint);

    // 2-3-5. 마지막 한계값 설정하기 :
    // 대상박스의 -width값 + 화면가로크기 2/3
    let lastPoint = target.width() - (winW / 3) * 2;
    console.log("마지막 한계값", lastPoint);

    // 2-4. 이벤트 발생시 left 값 체크하여 제한하기
    // on(이벤트명, 함수)
    // -> 이벤트명을 띄어쓰기로 여러개 설정할 수 있다!
    // 기존 JS는 addEventListener()를 이벤트마다 등록해야했음!
    // 대상: html,body
    // $('html,body').on('click mouseover keydown',()=>{

    // 마우스 왼쪽버튼 내려갈 때 : mousedown
    // 마우스 왼쪽버튼 올라올 때 : mouseup
    // 마우스 포인터 움직일 때 : mousemove
    // -> 모바일 터치 이벤트는 제이쿼리 터치펀치에서 처리함!
    // -> 모바일 이벤트: touchstart, touch
    $("html,body").on("mousedown mouseup mousemove", () => {
        // 1. 움직이는 대상 left 위치값
        let tgPos = target.offset().left;
        console.log("현재left값", tgPos);
        // 2. 처음한계값 체크하여 제한하기
        if (tgPos > firstPoint) {
            target.css({
                left: firstPoint + "px",
            }); //////////css ////////
        } // if
        // 3. 마지막 한계값 체크하여 제한하기
        // left값이 마이너스 이므로 -lastPoint로 계산
        else if (tgPos < -lastPoint) {
            target.css({
                left: -lastPoint + "px",
            }); ////// css ////
        } ////////// else if /////
    }); ///////// mousedown 등 ///////////
}); ////////////// jQB /////////////