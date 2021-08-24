import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import { Link } from "react-router-dom";


function HashTag() {
  const { sky, setSky, currentMenu, setCurrentMenu, listNum, setListNum, setLocationSearch, myLocation } =
    useApplicationContext();
    const myLocationLast = myLocation.lastIndexOf(" ");
    const myLocationName = myLocation.substring(myLocationLast, 0);

  for (let index = currentMenu.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1)); 
    const temp = currentMenu[index];
    currentMenu[index] = currentMenu[randomPosition];
    currentMenu[randomPosition] = temp;
  }
  let Menuslice = currentMenu.slice(0, 4);
function click (e) {
  const menu = e.currentTarget.innerHTML.substring(1)
  setLocationSearch(myLocationName+menu+"맛집");
  
}
  return (
    <HashDiv>
      <HashH2>
      <Link to="/searchResult">
        {Menuslice.map((item, index) => (
          <span onClick={click}>#{item} </span>
        ))}
        </Link>
      </HashH2>
    </HashDiv>
  );
}

const HashDiv = styled.div`

`;
const HashH2 = styled.h2`
  margin-top: 20px;
  font-size: 30px;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 16px;
   }
   @media screen and (min-height: 650px) {
    font-size: 22px;
   }
`;

export default HashTag;
