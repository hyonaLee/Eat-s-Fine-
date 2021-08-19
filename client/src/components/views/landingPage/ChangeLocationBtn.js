import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ChangeLocationBtn() {
  return (
    <BtnDiv>
      <Link to="/changelocation">
        <ChangeLocationBtnStyle>위치변경</ChangeLocationBtnStyle>
      </Link>
    </BtnDiv>
  );
}

const ChangeLocationBtnStyle = styled.button`
  font-size: 10px;
  line-height: 8px;
  color: white;
  background-color: #a5a0a0;
  padding: 5px;
  border-radius: 8px;
  height: 20px;
  width: 65px;
`;

const BtnDiv = styled.div`
  position: relative;
  top: 430px;
`;
export default ChangeLocationBtn;
