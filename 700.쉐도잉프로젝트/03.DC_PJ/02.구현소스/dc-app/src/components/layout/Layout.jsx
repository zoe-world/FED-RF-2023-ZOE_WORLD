// DC.com 레이아웃 컴포넌트
import React from "react";
import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";

export function Layout(){

    return(
        <>
        <TopArea/>
        <MainArea/>
        <FooterArea />
      </>
    );
}