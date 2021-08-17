import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";



function HashTag() {
const { sky, setSky, currentMenu, setCurrentMenu, listNum, setListNum, changeNum, setChangeNum } = useApplicationContext();
  const CurrentWeatherData = { sky };

  // console.log(currentMenu)
  // console.log(currentMenu.length)
  
function randomNum () {
  while(changeNum.length < 4) {
      let num = parseInt(Math.random()*currentMenu.length);
      if(changeNum.indexOf(num) <0) {
        changeNum.push(num)
      }
    }
    console.log(changeNum);
}

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
