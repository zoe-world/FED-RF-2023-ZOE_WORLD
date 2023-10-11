// 보그 PJ 메인 페이지 JS: main.js

import dFn from './dom.js';

// [1] 메인 페이지 등장액션 클래스 넣기
// 대상: .main-area section

// 첫번쨰 박스 뺴고 모두 숨김 클래스 넣기
const hideBox = dFn.qsa('.main-area section');
hideBox.forEach((ele,idx)=>{
    if(idx!=0)ele.classList.add('scAct');
}); //////////// foreach /////////////

