import React from 'react'
import Image from '../../asset/img/kookmin.png';
import * as L from "./LogoStyle.js";
import * as F from "../../components/Footer/Footer.js";
import * as P from "../../components/Page/Page.js";
import { useEffect } from "react-router-dom";


export default function Logo() {
    return (
        <P.Page>
            
            <L.LogoTitle>
                국맛탱
                <br></br>KMT
            </L.LogoTitle>

            <L.LogoImage src={Image}></L.LogoImage>

            <L.StartButtonDiv>
                <L.StartButton> 시작</L.StartButton>
            </L.StartButtonDiv>

        </P.Page>
    )
}
