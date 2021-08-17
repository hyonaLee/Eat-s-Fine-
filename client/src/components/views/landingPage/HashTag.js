import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function HashTag() {
  const { sky, setSky, currentMenu, setCurrentMenu, listNum, setListNum } =
    useApplicationContext();

  for (let index = currentMenu.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1)); 
    const temp = currentMenu[index];
    currentMenu[index] = currentMenu[randomPosition];
    currentMenu[randomPosition] = temp;
  }
  let Menuslice = currentMenu.slice(0, 4);

  return (
    <HashDiv>
      <HashH2>
        {Menuslice.map((item, index) => (
          <span>#{item} </span>
        ))}
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
