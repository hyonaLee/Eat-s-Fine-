import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import { Link } from "react-router-dom";

function HashTag() {
  const {
    currentMenu,
    setLocationSearch,
    myLocationChg,
    myLocation,
    myNewLocation,
    setClearData,
  } = useApplicationContext();

  console.log("1myLocationChg", myLocationChg);
  console.log("1myNewLocation", myNewLocation);

  const myLocationLast = myLocation.lastIndexOf(" ");
  const myLocationName = myLocation.substring(myLocationLast, 0);

  for (let index = currentMenu.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));
    const temp = currentMenu[index];
    currentMenu[index] = currentMenu[randomPosition];
    currentMenu[randomPosition] = temp;
  }
  let Menuslice = currentMenu.slice(0, 4);

  function click(e) {
    setClearData(true);
    console.log(e.currentTarget.innerHTML);
    console.log("2myLocationChg", myLocationChg);
    console.log("2myNewLocation", myNewLocation);

    if (!myLocationChg) {
      setLocationSearch(myLocationName + e.currentTarget.innerHTML);
    } else {
      setLocationSearch(myNewLocation + e.currentTarget.innerHTML);
    }
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
`;
const HashH2 = styled.h2`
  font-size: 25px;
  color: white;
  line-height: 50px;
`;

export default HashTag;
