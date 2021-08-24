import React, { useState } from "react";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      setLocationSearch(myLocationName + "맛집");
    } else {
      setLocationSearch(myLocationName + text + "맛집");
    }
  }

  return (
    <InputDiv>
      <InputText
        type="text"
        placeholder="원하는 메뉴가 없나요?"
        onChange={onchangeText}
        value={text}
      />
      <Link to="/searchResult">
        <i className="material-icons" onClick={onclickMenu} style={{color:"#a5a0a0", position:"relative", right:"35px", top:"7px", fontSize:"24px", fontWeight:"bold"}}>
          search
        </i>
      </Link>
    </InputDiv>
  );
}
const InputText = styled.input`
  width: 250px;
  height: 34px;
  border-radius: 18px;
  margin-left: 20px;
  padding-left: 10px;
  border: 0;
`;

const InputDiv = styled.div`
  display: inline-block;
  margin-top: 35px;

  @media screen and (max-width: 768px) {
    margin-top: 28px;
  }
`;

export default SearchBoxMenu;
