import React from 'react';
import styled from 'styled-components';

function InfoToday() {

    return (
      <div>
        <InfoDiv>
            <InfoH1>오늘의 날씨는 <span>맑음</span>이에요.</InfoH1>
            <InfoH1>오늘같은날엔 이 음식 어때요?</InfoH1>
        </InfoDiv>
        </div>
    );
}


const InfoDiv = styled.div`
  position: relative;
  top: 350px;
`
const InfoH1 = styled.h1`
  font-size: 25px;
  color: white;
  line-height: 50px;
`;

export default InfoToday;