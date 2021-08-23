import React from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function InfoToday() {
  const { sky } = useApplicationContext();
  return (
    <InfoDiv>
      <InfoH2>오늘의 날씨는 {sky}이에요.<br/>오늘같은날엔 이 음식 어때요?</InfoH2>
    </InfoDiv>
  );
}

const InfoDiv = styled.div`
  margin-top: 35px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
   }
`;
const InfoH2 = styled.h2`
  margin: 0;
  font-size: 25px;
  color: white;
  line-height: 50px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 25px
   }
`;  

export default InfoToday;
