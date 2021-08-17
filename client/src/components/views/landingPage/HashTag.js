import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function HashTag() {
const { sky, setSky, currentMenu, setCurrentMenu, listNum, setListNum } = useApplicationContext();
  const CurrentWeatherData = { sky };
  return (
    <HashDiv>
      <HashH2>
      
        <span>#{currentMenu[listNum[0]]} </span>
        <span>#{currentMenu[listNum[1]]} </span>
        <span>#{currentMenu[listNum[2]]} </span>
        <span>#{currentMenu[listNum[3]]} </span>

      </HashH2>
    </HashDiv>
  );
}

const HashDiv = styled.div`
  position: relative;
  top: 400px;
`;
const HashH2 = styled.h2`
  font-size: 25px;
  color: white;
  line-height: 50px;
`;

export default HashTag;
