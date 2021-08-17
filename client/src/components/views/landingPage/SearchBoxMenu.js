import React, { useState } from "react";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

function SearchBoxMenu() {
  const [text, setText] = useState("");
  // const [location, setLocation] = useState("");
  const { setLocationSearch, myLocation } = useApplicationContext();
  const myLocationLast = myLocation.lastIndexOf(" ");
  const myLocationName = myLocation.substring(myLocationLast, 0);

  function onchangeText(e) {
    setText(e.target.value);
  }

  function onclickMenu() {
    if (text === "") {
      setLocationSearch(text);
    } else {
      setLocationSearch(myLocationName + text + "맛집");
    }
  }

  return (
    <InputDiv>
      <input
        type="text"
        placeholder="내위치에서 메뉴 입력"
        onChange={onchangeText}
        value={text}
      />
      <Link to="/searchResult">
        <input type="button" onClick={onclickMenu} value="검색" />
      </Link>
    </InputDiv>
  );
}

const InputDiv = styled.div`
  position: relative;
  top: 450px;
`;

export default SearchBoxMenu;
