import React, { useRef, useEffect } from 'react'
import * as P from "../../components/Page/Page.js";
import * as H from "../../components/Head/Head.js";
import * as F from "../../components/Footer/Footer.js";
import * as N from "./NewStoreStyle.js";
import Home from '../../asset/img/Home.png';
import Plus from '../../asset/img/+.png';
import Information from '../../asset/img/Information.png';

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.611078, 126.995938), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

export default function NewStore() {
    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
    }, []);

    return (
        <P.Page>
            <H.LogoTitle>
                국맛탱
                <br></br>KMT
            </H.LogoTitle>

            <N.StoreName>
                <div>식당 이름: </div>
                <input style={{marginLeft:"10px",height:"20px"}}></input>
            </N.StoreName>

            <div className="map-container" style={{ width: "100%", height: "400px", marginTop: "30px" }} ref={container}></div>

            <F.UnderBar style={{ zIndex: 2 }}>
                <F.UnderBar1>
                    <F.CustomLink to='/Map'>   
                        <F.UnderImage src={Home}></F.UnderImage>
                        <F.FooterName>홈</F.FooterName>
                    </F.CustomLink> 
                </F.UnderBar1>
                
                <F.UnderBar2>
                    <F.UnderImage src={Plus}></F.UnderImage><F.FooterName>새 식당</F.FooterName>
                </F.UnderBar2>
                
                <F.UnderBar3>
                    <F.UnderImage src={Information}></F.UnderImage> <F.FooterName>내정보</F.FooterName>
                </F.UnderBar3>
            </F.UnderBar>
        </P.Page>
    )
}
