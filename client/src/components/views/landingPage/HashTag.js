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
          <HashP onClick={click}>#{item} </HashP>
        ))}
        </Link>
    </HashDiv>
  );
}
const HashDiv = styled.div`

`;
const HashP = styled.p`
  display: inline;
  font-weight: bolder;
  color: white;
  font-size: 30px;
  :hover{
    color: gray;
  }

  @media screen and (max-width: 768px) {
    margin-top: 16px;
    font-size: 18px;
   }
`;

export default HashTag;
