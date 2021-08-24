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
    <BtnDiv>
      <RecomendBtnStyle onClick={clickMore}>메뉴더보기</RecomendBtnStyle>
    </BtnDiv>
  );
}

const RecomendBtnStyle = styled.button`
  cursor: pointer;
  font-size: 20px;
  line-height: 25px;
  color: white;
  background-color: #a5a0a0;
  padding: 5px;
  border-radius: 5px;
  height: 35px;
  width: 125px;
  @media screen and (max-width: 768px) {
    height: 30px;
    width: 100px;
    font-size: 17px;
    line-height: 20px;
   }
`;

const BtnDiv = styled.div`
margin-top: 5px;
  @media screen and (max-width: 768px) {
    margin-top: 3px;
   }
`;
export default RecomendBtn;
