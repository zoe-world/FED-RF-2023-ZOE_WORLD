// 메인페이지 컨텐츠 컴포넌트

import { Banner } from "../modules/Banner";

export function MainCont(){
    return(
        <>
            {/* 1. 배너페이지 */}
            <section className="page" style={{backgroundColor:"lightblue"}}>
                {<Banner/>}
            </section>
            <section className="page" style={{backgroundColor:"lightgray"}}></section>
            <section className="page" style={{backgroundColor:"lightgreen"}}></section>
            <section className="page" style={{backgroundColor:"lightseagreen"}}></section>
            <section className="page" style={{backgroundColor:"lightpink"}}></section>
        </>
    )
} ///////////MainCont 컴포넌트 ///////