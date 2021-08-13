import React, { useState, useEffect } from "react";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import styled from 'styled-components';
import { Route,Link } from 'react-router-dom';
import MapContainer from './../kakaoMap/MapContainer';



function SearchBox() {
  const [btnClicks, setBtnClicks] = useState(false);
  const [text, setText] = useState("");
  const { setLocationSearch, myLocation } = useApplicationContext();

  function onchange(e) {
    setText(e.target.value);
    console.log("1",e.target.value);
  }
  function onclick() {
    if (text === "") {
      setLocationSearch(text);
    } else {
      setLocationSearch(myLocation+text + "맛집");
    }
  }

  return (
    <SearchDiv>
      <Input
        type="text"
        placeholder="원하시는 메뉴가 있나요?"
        onChange={onchange}
        value={text}
      />
      <Link to="/map">
      <InputBtn type="button" onClick={onclick} value="검색" />
      </Link>
      <Route path="/map" component={MapContainer} />
      <p>{btnClicks}</p>
    </SearchDiv>
  );
}

const SearchDiv = styled.div`
  position: relative;
  top: 350px;
`
const Input = styled.input`
  height: 70px;
  width: 350px;
  border-radius: 8px;
  padding-left: 20px;
  font-size: 20px;
`
const InputBtn = styled.input`
  height: 70px;
  width: 90px;
  border-radius: 8px;
  padding: 5px;
  font-size: 20px;
`

export default SearchBox;
