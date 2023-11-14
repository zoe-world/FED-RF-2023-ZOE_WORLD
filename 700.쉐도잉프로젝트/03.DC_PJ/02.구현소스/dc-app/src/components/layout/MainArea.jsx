// MainArea 컴포넌트
import { Main } from "../pages/Main";
import { Character } from "../pages/Character";
import { Comics } from "../pages/Comics";
import { Movies } from "../pages/Movies";
import { Games } from "../pages/Games";
import { News } from "../pages/News";
import { Video } from "../pages/Video";
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