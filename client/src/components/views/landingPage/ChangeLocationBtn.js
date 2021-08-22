import React, { useState } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function ChangeLocationBtn() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { setMyNewLocation, setMyLocationChg, myLocationChg } =
    useApplicationContext();

  const openTextarea = () => {
    setOpen(true);
  };

  const closeTextarea = () => {
    setOpen(false);
  };

  const onchangeText = (e) => {
    setText(e.target.value);
  };

  const locationChange = () => {
    setMyLocationChg(true);
    console.log("myLocationChg", myLocationChg);
    setMyNewLocation(text);
    setOpen(false);
  };

  return (
    <>
      {!open ? (
        <BtnDiv onClick={openTextarea}>
          <i className="material-icons">my_location</i>
          <span>위치 변경</span>
        </BtnDiv>
      ) : (
        <BtnDiv>
          <br />
          <input
            type="text"
            style={{ width: "200px", borderRadius: " 5px" }}
            onChange={onchangeText}
            value={text}
            placeholder="위치 변경"
          />
          <button onClick={locationChange}>변경</button>
          <button onClick={closeTextarea}>취소</button>
        </BtnDiv>
      )}
    </>
  );
}

// const ChangeLocationBtnStyle = styled.button`
//   font-size: 10px;
//   line-height: 8px;
//   color: white;
//   background-color: #a5a0a0;
//   padding: 5px;
//   border-radius: 8px;
//   height: 20px;
//   width: 65px;

// `;

const BtnDiv = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  top: 420px;
`;
export default ChangeLocationBtn;
