// 제이쿼리 UI 드래그 & 드롭 기능활용하기 ////

// 제이쿼리 코드 구역 : html태그 로딩후 실행구역
$(()=>{

    // 1. 드래그 기능 대상: .draggable
    const dgEle = $('.draggable');

    // 2. 드래그 기능 설정하기 : draggable() 메서드호출
    // dgEle.draggable() -> 호출만 해도 드래그기능은 됨!
    // 드래그 기능옵션은 {} 객체로 전달함!
    dgEle.draggable({
        // 커서모양 '쥔주먹' 표시
        cursor: 'grabbing', 
        // 드래그 대상 상위처리(z-index)
        stack: '.draggable', 
        // 이동 중 투명도 설정
        opacity: 0.7 
    }); ///////// draggable 메서드 /////

    // 3. 상세 요구사항 반영하기
    // 드래그 중 포스트잇 이미지 변경하기
    // .invert를 .draggable에 주면 배경이미지 변경됨
    // 제이쿼리에 미리 만들어지지 않은 이벤트는 일반적으로
    // on(이벤트명,함수) -> 이 메서드를 사용함!
    
    // 3-1. 드래그 시작 이벤트: dragstart -> 이미지변경
    dgEle.on('dragstart',function(){
        // console.log('드래그시작:',this);
        // 클래스 .invert넣기
        $(this).addClass('invert');
    }); //////////// dragstart 이벤트 함수 /////
    
    // 3-2. 드래그 종료 이벤트 : dragstop -> 이미지복귀
    dgEle.on('dragstop',function(){
        // console.log('드래그끝:',this);
        $(this).removeClass('invert');
    }); //////////// dragstop 이벤트 함수 /////
    
    // 4. 드롭 대상 박스에 드롭될 때 동영상 보여주기
    // droppable() 메서드 : 드롭되는 요소처리
    // 이벤트 대상 : .dropshow 
    $('.dropshow').droppable({
        drop: function(evt,ele){
            // evt - 이벤트 전달변수
            // ele - 드롭관련 객체
            // 드롭된 요소는 ele.draggble
            let target = ele.draggable;
            
            // console.log('나,빠졌따~',target);
            
            // 1. 드롭된요소의 이미지 src를 읽어오기
            let isrc = target.find('img').attr('src');
            console.log(isrc);

            // 2. 드롭영역의 배경이미지 변경하기
            // this - 드롭박스
            $(this).css({
                backgroundImage:`url(${isrc})`,
            })
            // 3. 드롭된요소 사라지기
            target.hide();

            // 4. 드롭된 요소의 자식 p태그의 글자 읽어오기
            let ptxt = target.find('p').text();
            
            // 5. 드롭영역의 글자 넣기
            $(this).text(ptxt+' 당첨!');

            // 6. 유튜브 동영상 박스넣기
            $('.u-box').html(`
                <div id="m-box">
                    <a href="#">×</a>
                </div>
            `);///// html ////

            // 7. 생성된 동영상 박스 css 셋팅하기
            let mbox = $('#m-box');
            const mboxClose = mbox.find('a')
            mbox.css({
                position:'fixed',
                top:"0",
                left:"0",
                width:'100%',
                height:'100%',
                zIndex:'999',
                backgroundColor:'rgba(0,0,0,0.8)',
            }); ////// css ////////////////////

             // 8. 동영상 박스에 유튜브 iframe 넣기
             // html()로 넣으면 닫기버튼 지워짐
             // 맨뒤에 요소 추가
            let mvId = target.attr('data-mv');
            mbox.append(`
            <iframe src="https://www.youtube.com/embed/${mvId}?autoplay=1" allow="autoplay" style="width:100%;height:100%;border:none"></iframe>
            `)
            // 9. 동영상 박스 숨기고 1초후 slideDown으로 보이기
            .hide().delay(1000).slideDown(2000);

            // 10. 닫기버튼 셋팅 및 클릭시 동영상 당기
            mbox.find('a')
            .css({
                position: "absolute",
                top: "50px",
                right: "50px",
                width: "50px",
                height: "50px",
                textDecoration: "none",
                font: "bold 48px Verdana",
                color: "#fff",
                textShadow: "0 0 5px #777",
            })
            .click(function(){
                // 1. mbox 닫기
                mbox.slideUp(1000,function(){
                // 2. 자기 자신 없애기(this는 mbox)
                    $(this).remove();
                // 3. 드롭된 요소(target) 다시 보이기
                // 동시에 원래 자기 위치로 돌아오기
                    target.show().css({
                        top:"0",
                        left:'0',
                    }); ///// css ////
                    $('.dropshow')
                    .text('여기에 드롭허세요!!')
                    .css({
                        backgroundImage:'url(addimg/effect2.jpg)'
                    }); //////// css /////

                }); //////// slideUp ////

            })
        }, ////////// drop 이벤트 옵션 메서드 /////
    });



}); ///////////// jQB //////////////