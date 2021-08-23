import React, { useState } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import ChangeMap from "../kakaoMap/ChangeMap";

function ChangeLocationBtn() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { setLocationSearch, myLocation, setLocation, locationSearch,setLocationchangeControl } = useApplicationContext();
  function onchangeText(e) {
    setText(e.target.value);
    console.log("inputValue", e.target.value);
  }
  
  function onclickBtn() {
    setLocationSearch(text);
    console.log("setlocation", locationSearch);
  }
  
  function openModal() {
    setOpen(true);
    setLocationchangeControl(false)
  }
  function closeModal() {
    setOpen(false);
  }
  return (
    <>
     {!open ? (
    <BtnDiv>
        <i className="material-icons" onClick={openModal}>my_location</i>위치변경
    </BtnDiv>
      ) : (
    <InputDiv>
    <input
      type="text"
      placeholder="위치 입력"
      onChange={onchangeText}
      value={text}
    />
    <input type="button" onClick={onclickBtn} value="검색" />
    <input type="button" onClick={closeModal} value="위치변경" />
    <ChangeMap/>
   </InputDiv>
   
      )}
  </>
  );
}

const BtnDiv = styled.div`
  display: inline-block;
  position: relative;
  top: 410px;
  font-size: 10px;
  color: white;
`;

const InputDiv = styled.div`
  position: relative;
  top: 600px;
`;

export default ChangeLocationBtn;
