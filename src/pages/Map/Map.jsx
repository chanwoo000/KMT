import React, { useRef, useEffect } from "react";
import * as P from "../../components/Page/Page.js";

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};


function Home() {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
    }, []);

    return (
    <P.Page
        className="map"
        style={{ width: "400px", height: "850px" }}
        ref={container}
        
    ></P.Page>
    );
}

export default Home;