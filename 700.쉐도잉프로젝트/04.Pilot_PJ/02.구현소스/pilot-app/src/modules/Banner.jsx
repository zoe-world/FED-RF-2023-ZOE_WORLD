// Pilot PJ 메인 페이지 배너 컴포넌트

// 배너용 CSS 불러오기
import '../css/banner.css'

export function Banner() {

    const BAN_CNT = 6;
    // 리스트를 만드는 함수//
    const makeList = (gubun) => {
        //gubun : 1 - 배너 / 0 - 블릿
        // for 문을 돌려서 태그를 생성할 때 배열에 담는다
        // 배열에 담는 이유는 문자형이 아닌 JSX 문법의 태그이므로, 배열에 담고
        // for문 없이 그대로 태그를 출력할 수 있다! 
        let hcode = [];

        for(let i=0;i<BAN_CNT;i++){
            if(gubun){ // 배너코드
                hcode[i] =
                <li key={i} className={'ban'+(i==0?'6':i)}>
                    <span className="ir">배너{i==0?'6':i}</span>
                </li>
            } else { // 블릿코드
                hcode[i] =
                <li key={i} className={i==0?'on':''}>
                    <a href="#">
                        <span className="bld">블릿</span>
                    </a>
                </li>
            } 
        }/////////// for ////////
        // 코드리턴
        // console.log(hcode)
        return hcode;

    } ///// makeList 함수 ///////
  return (
    <>
    {/* 배열로 태그를 받았지만 그 데이터가 JSX문법의 데이터이고, JSX문법의 태그 내부에 호출하여 태그가 그대로 출력됨!
        map()으로 순회하여 태그를 만들떄도 동일한 원리가 작동됨!
    */}
      <ul className="slide">{makeList(1)}</ul>
      <ol className="bindic">{makeList(0)}</ol>
      <div className="cover"></div>
    </>
  );
} ////////// Banner 컴포넌트 ////////
