import React, { useState } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function RecomendBtn() {
  const { listNum, setListNum, currentMenu, setCurrentMenu } =
    useApplicationContext();
  const [changeNum, setChangeNum] = useState([]);

  function clickMore() {
    setListNum(listNum.map((index) => index + 4));
  }
  return (
    <div>
      <RecomendBtnStyle onClick={clickMore}>메뉴 변경</RecomendBtnStyle>
    </div>
  );
}

const RecomendBtnStyle = styled.button`
  cursor: pointer;
  font-size: 14px;
  line-height: 25px;
  color: white;
  background-color: #a5a0a0;
  padding: 5px;
  border-radius: 5px;
  height: 35px;
  width: 100px;
  font-weight: bold;
  border: 1px solid gray;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    height: 30px;
    width: 100px;
    font-size: 15px;
    line-height: 20px;
   }
   @media screen and (min-height: 650px) {
    margin-top: 15px;
   }
`;

export default RecomendBtn;
