// 신상품 컴포넌트 ////////

import { useEffect } from "react";

// 신상품 데이터 가져오기
import { sinsangData } from "../data/sinsang";

import $ from 'jquery';

export function SinSang(props) {
  // props.cat - 카테고리 분류명
  
  // 선택데이터 : 해당카테고리 상품데이터만 가져온다!
  const selData = sinsangData[props.cat];
  console.log(selData)
  const makeList = () => {
    let temp = [];
    // 원하는 반복수 만큼 for 문 실행하며 배열에
    for (let x = 0; x < 9; x++) {
      temp[x] = (
        <li
        className={"m" + (x + 1)} 
        key={x}
        onMouseEnter={showInfo}
        onMouseOut={removeInfo}
        >
          <a href="#">
            <img
              src={"./images/goods/" + props.cat + "/m" + (x + 1) + ".png"}
              alt="신상품"
            />
          </a>
        </li>
      );
    } /////// for
    return temp;
  }; //////// makeList 함수 /////////

  // 상품에 오버시 상품정보를 보여주는 함수!
  const showInfo = (e) => {
    // 대상
    const tg = $(e.currentTarget)
    // 1. 이벤트가 발생한 li의 class 읽어오기(상품정보객체의 카ㅣ)
    let gKey = tg.attr('class');
    // console.log('됨?',selData[gKey])
    
    // 2. 상품정보박스를 만들고 보이게하기
    // 마우스 오버된 li자신에 넣어줌
    tg.append(`
      <div class="ibox"></div>
    `)

    // 3. 현재 li에 만든 .ibox에 데이터 넣기
    tg.find('.ibox').html(
      selData[gKey].split('^')
      .map((v) =>`
      <div>${v}</div>
      `)
    )
    // 등장애니
    .animate({
      top:'90%',
      opacity: 1,
    },300)

  }; /////////showInfo 함수 ////

  // 정보박스 지우기 함수
  const removeInfo = (e) => {
    $(e.currentTarget).find('.ibox').remove();
  };

  // 신상품 리스트 이동함수 ///////
  // 위치값변수*(left값)
  let lpos = 0;
  // 재귀호출 상태값(1-호출, 0-멈춤)
  let callSts = 1;
  // 신상리스트 이동함수
  const flowList = (ele) => { // ele- 움직일 대상
    // console.log(ele);
    // 대상의 left값을 1씩 감소함
    lpos--;

    // 적용함
    ele.css({left:lpos+'px'});

    // 이미지박스 한개가 나가면 잘라서 맨뒤로 보냄
    if(lpos<-300){
      // 위치값 초기화
      lpos = 0;
      // 첫번쨰 li 맨뒤로 이동
      ele.append(ele.find('li').first());
    }

    // 재귀호출
    if(callSts)
    setTimeout(()=>flowList(ele),40)
  } ///////// flowlist /////

  // 오버/아웃시 이동제어함수 
  const flowOut = () => {
    
  }

  // 랜더링 후 실행구역 ////
  useEffect(()=>{
    flowList($('.flist'))
  })

  // 리턴코드
  return (
    <>
      <h2 className="c1tit">
        NEW MEN'S ARRIVAL
        <button>전체리스트</button>
      </h2>
      <div className="flowbx" onMouseOver={()=>callSts=0} onMouseOut={()=>(callSts=1,flowList($('.flist')))}>
        <ul className="flist">{makeList()}</ul>
      </div>
    </>
  );
} //////////// SinSang 컴포넌트 ///////////
