// 01.공유신발 JSX
import myData from "./data.js";

// 메인 컴포넌트 ///////////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종적으로 랜더링하는 구성 컴포넌트

function MainComponent() {
  return (
    <React.Fragment>
      <div>
        {/* 1. 타이틀 */}
        <h1 className="tit">공유가 신고 다닌다는!</h1>
        {/* 2. 내용박스 */}
        <section>
          <h2>공유는 오늘도 멋즴</h2>
          <img
            src="./images/vans/gongyoo.jpg"
            alt="의자에 앉아서 엄지손가락으로 입술을 훑는 행동을 하는 공유"
          />
        </section>
        {/* 3. 상품리스트 박스 */}
        <div className="gwrap">
          <GoodsCode />
        </div>
      </div>
    </React.Fragment>
  );
} ///////// MainComponent ////////

// console.log(myData)

// 상품 html 코드구성 컴포넌트 ////
function GoodsCode() {
  return myData.map((v) => (
    <ol className="glist">
      <li><img src={"./images/vans/vans_"+v.idx+".jpg"} alt="신발" /></li>
      <li>{v.gname}</li>
      <li>가격: {v.gprice}원</li>
    </ol>
  ));
} ///////// GoodsCode ////////

// 메인 컴포넌트 출력하기 //
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
