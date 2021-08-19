import React from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function InfoToday() {
  const { sky } = useApplicationContext();
  return (
    <InfoDiv>
      <InfoH2>오늘의 날씨는 {sky}이에요.</InfoH2>
      <InfoH2>오늘같은날엔 이 음식 어때요?</InfoH2>
    </InfoDiv>
  );
}

const InfoDiv = styled.div`
  position: relative;
  top: 310px;
`;
const InfoH2 = styled.h2`
  font-size: 25px;
  color: white;
  line-height: 20px;
`;  

export default InfoToday;
