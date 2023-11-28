// Pilot PJ - 패션인트로 컴포넌트 ///////

// 컨텍스트 API 불러오기
import { useContext } from "react";
import { pCon } from "./PilotContext";

// 패션인트로 데이터불러오기
import { fsData } from "../data/fashion_intro";

// 페션 css
import "../css/fashion_intro.css";

export function FashionIntro(props) {
  // props.cat - 카테고리 분류명

  // 컨텍스트 사용
  const myCon = useContext(pCon);
  // pCon에 Provider value 속성에 공개한 변수/함수를 사용함!

  //선택데이터
  const selData = fsData[props.cat];

  // 새로적용할 스타일 객체
  const newStyle = {};
  if (props.cat == "women") newStyle.flexDirection = "row-reverse";
  return (
    <>
      <div id={props.cat} className="fs-page">
        <ul
          className="pgc"
          // style={props.cat=='women'?{flexDirection:'row-reverse'}:{}}
          style={newStyle}
        >
          <li className="imgc">
            <img
              src={props.cat == "style" ? selData.isrc[0] : selData.isrc}
              alt={props.cat == "style" ? selData.ialt[0] : selData.ialt}
            />
          </li>
          {/* 스타일이면 타이틀이 2개 아니면 1개 */}
          <li className="txtc">
            {props.cat != "style" && (
              <h2>
                <a href="#"
                onClick={()=>myCon.chgPgName(props.cat)}>
                  {selData.tit[0]}
                  <br />
                  {selData.tit[1]}
                </a>
              </h2>
            )}
            {props.cat == "style" && (
              <>
                <h2 className="tm">
                  <a href="#" onClick={()=>myCon.chgPgName(props.cat)}>
                    {selData.tit[0][0]}
                    <br />
                    {selData.tit[0][1]}
                  </a>
                </h2>
                <h2 className="tw">
                  <a href="#" onClick={()=>myCon.chgPgName(props.cat)}>
                    {selData.tit[1][0]}
                    <br />
                    {selData.tit[1][1]}
                  </a>
                </h2>
              </>
            )}
          </li>
          {/* 스타일 패션에서만 나오는 이미지 */}
          {props.cat == "style" && (
            <li className="imgc">
              <img src={selData.isrc[1]} alt={selData.ialt[1]} />
            </li>
          )}
        </ul>
      </div>
    </>
  );
} ///////////// FashionIntro 컴포넌트 ///////////
