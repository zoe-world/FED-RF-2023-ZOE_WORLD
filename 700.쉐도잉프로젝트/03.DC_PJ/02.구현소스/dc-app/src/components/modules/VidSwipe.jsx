// DC PJ 비디오스와이프 컴포넌트

/*
[ 구조정의 ]
Root>
section.vidswbox>
h2.tit +
<SwiperVid /> +
section.vidbx >
div.playvid >
h2.ifrtit + iframe + button
*/

// 비디오스와이프 css
import "../../css/vid_swipe.css";
import { SwiperVid } from "../plugin/SwiperVid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export function VidSwipe(props) {

    // props.tit - 비디오 스와이프 타이틀
    

// 리턴코드 /////////    
return (
<>
    {/* 모듈코드 */}
    <section className="vid-swbox">
        {/* 1. 모듈타이틀 */}
        <h2 className="tit">{props.tit}</h2>
        {/* 2. 스와이퍼 컴포넌트 SwiperVid */}
        <SwiperVid/>
        {/* 3. 비디오 재생창 */}
        <section className="vid-bx">
            {/* 비디오 중앙박스 */}
            <div className="play-vid">
                {/* 비디오 타이틀 */}
                <h2 className="ifr-tit"></h2>
                {/* 아이프레임 */}
                <iframe src="" allow="autoplay"></iframe>
                {/* 닫기버튼 */}
                <button className="cbtn">
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            </div>
        </section>
    </section>
</>
);
} ////////////// VidSwipe 컴포넌트 //