import React from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function InfoToday() {
  const { sky } = useApplicationContext();
  return (
    <InfoDiv>
      <InfoH2>오늘의 날씨는 {sky}에요.<br/>오늘같은날엔 이 음식 어때요?</InfoH2>
    </InfoDiv>
  );
}

const InfoDiv = styled.div`
  margin-top: 35px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-top: 25px;
   }
   @media screen and (min-height: 650px) {
    margin-top: 65px;
   }
`;
const InfoH2 = styled.h2`
  color: white;
  margin: 0;
  font-size: 25px;
  line-height: 50px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 30px
   }
   @media screen and (min-height: 650px) {
    line-height: 40px
   }
`;  

export default InfoToday;
