import React, { useState } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import ChangeMap from "../kakaoMap/ChangeMap";

function ChangeLocationBtn() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const {
    setLocationSearch,
    myLocation,
    setLocation,
    locationSearch,
    setLocationchangeControl,
  } = useApplicationContext();
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
    setLocationchangeControl(false);
  }
  function closeModal() {
    setOpen(false);
  }
  return (
    <>
      {!open ? (
        <BtnDiv onClick={openModal}>
          <i
            className="material-icons"
            style={{ position: "relative", top: "4px", fontSize: "19px" }}
          >
            my_location
          </i>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>
            {" "}
            위치 변경
          </span>
        </BtnDiv>
      ) : (
        <InputDiv>
          <SearchLocationDiv>
            <LocationInput
              type="text"
              placeholder="위치 입력"
              onChange={onchangeText}
              value={text}
            />
            <i
              className="material-icons"
              onClick={onclickBtn}
              style={{
                color: "#a5a0a0",
                position: "relative",
                right: "35px",
                top: "7px",
                fontSize: "22px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              search
            </i>
            <br />
            <LocationChgInput
              type="button"
              onClick={closeModal}
              value="위치변경"
            />
          </SearchLocationDiv>
          <ChangeMap />
        </InputDiv>
      )}
    </>
  );
}
const LocationInput = styled.input`
  width: 200px;
  height: 20px;
  margin-left: 24px;
  padding-top: 2px;
  margin-bottom: 8px;
`;
const LocationChgInput = styled.input`
  border-radius: 5px;
  background-color: #a6a6a6;
  color: white;
`;
const SearchLocationDiv = styled.div`
  background-color: #828282;
  width: 280px;
  height: auto;
  padding-bottom: 10px;
  border-radius: 0 0 8px 8px;
  z-index: 10;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnDiv = styled.div`
  cursor: pointer;
  color: white;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

const InputDiv = styled.div`
  width: 100%;
  text-align: center;
  z-index: 5;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export default ChangeLocationBtn;
