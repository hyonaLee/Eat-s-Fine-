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
      <Link to="/searchResult">
        {Menuslice.map((item, index) => (
          <HashH2 onClick={click}>#{item} </HashH2>
        ))}
        </Link>
    </HashDiv>
  );
}
const HashDiv = styled.div`

`;
const HashH2 = styled.h2`
  display: inline;
  font-size: 30px;
  color: white;
  :hover{
    color: gray;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 16px;
   }
   @media screen and (min-height: 650px) {
    font-size: 22px;
   }
`;

export default HashTag;
