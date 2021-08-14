import React, { useState, useEffect } from "react";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import styled from 'styled-components';
import { Route,Link } from 'react-router-dom';



function SearchBox() {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const { setLocationSearch, myLocation } = useApplicationContext();

  function onchangeText(e) {
    setText(e.target.value);
    console.log("1", e.target.value);
  }

  function onchangeText2(e) {
    setLocation(e.target.value);
    console.log("2", e.target.value);
  }

  function onclickMenu() {
    if (text === "") {
      setLocationSearch(text);
    } else {
      setLocationSearch(myLocation + text + "맛집");
    }
  }
  function onclickLocation() {
    if (text === "") {
      setLocationSearch(location);
    } else {
      setLocationSearch(location + "맛집");
    }
  }

  return (
    <InputDiv>
      {/* <input
        type="text"
        placeholder="내위치에서 메뉴 입력"
        onChange={onchangeText}
        value={text}
      /> */}
      {/* <Link to="/map"> */}
      {/* <input type="button" onClick={onclickMenu} value="검색" /> */}
      {/* </Link> */}
      <input
        type="text"
        placeholder="다른지역 입력"
        onChange={onchangeText2}
        value={location}
      />
      <input type="button" onClick={onclickLocation} value="검색" />
    </InputDiv>
  );
}


const InputDiv = styled.div`
  position: relative;
  top: 400px;

`

export default SearchBox;
