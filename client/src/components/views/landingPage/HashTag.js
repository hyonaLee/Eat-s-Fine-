import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import { Link } from "react-router-dom";

function HashTag() {

  const { sky, setSky, currentMenu, setCurrentMenu, listNum, setListNum, setLocationSearch, myLocation } =
    useApplicationContext();
    console.log("태그마이로케이션",myLocation)
    const myLocationLast = myLocation.lastIndexOf(" ");
    const myLocationName = myLocation.substring(myLocationLast, 0);
    console.log("태그마이로케이션네임",myLocationName)

  for (let index = currentMenu.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));
    const temp = currentMenu[index];
    currentMenu[index] = currentMenu[randomPosition];
    currentMenu[randomPosition] = temp;
  }
  let Menuslice = currentMenu.slice(0, 4);

function click (e) {
  const menu = e.currentTarget.innerHTML.substring(1)
  console.log(e.currentTarget.innerHTML);
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
  display: block;
  position: relative;
  top: 350px;
  @media screen and (max-width: 768px) {
    top: 170px;
   }
`;
const HashH2 = styled.h2`
  font-size: 25px;
  color: white;
  line-height: 50px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
   }
`;

export default HashTag;
