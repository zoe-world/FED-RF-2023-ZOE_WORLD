// MainArea 컴포넌트
import { Main } from "../contents/Main";
import { Character } from "../contents/Character";
import { Comics } from "../contents/Comics";
import { Movies } from "../contents/Movies";
import { Games } from "../contents/Games";
import { News } from "../contents/News";
import { Video } from "../contents/Video";
import { SwiperApp } from "../plugin/SwiperApp";
import { Outlet } from "react-router-dom";

export function MainArea(props) {
// cat 속성으로 메뉴분류 전달

return (
<main className="cont">
    <Outlet />
</main>
);
} //////////// MainArea 컴포넌트 ///////