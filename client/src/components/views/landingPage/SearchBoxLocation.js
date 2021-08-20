import React, { useState } from "react";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

function SearchBoxLocation() {
  const [text, setText] = useState("");
  // const [location, setLocation] = useState("");
  const { setLocationSearch, myLocation, setLocation, locationSearch } = useApplicationContext();

  function onchangeText(e) {
    setText(e.target.value);
    console.log("inputValue", e.target.value);
  }

  function onclickBtn() {
    setLocationSearch(text);
    console.log("setlocation", locationSearch);

  }

  return (
    <InputDiv>
      <input
        type="text"
        placeholder="위치 입력"
        onChange={onchangeText}
        value={text}
      />
      <Link to="/changelocation">
      <input type="button" onClick={onclickBtn} value="검색" />
      </Link>
    </InputDiv>
  );
}

const InputDiv = styled.div`
  position: relative;
  top: 600px;
`;

export default SearchBoxLocation;
