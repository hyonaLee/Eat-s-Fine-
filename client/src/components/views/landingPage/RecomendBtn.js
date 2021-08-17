import React, { useState } from "react";
import styled from 'styled-components';
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function RecomendBtn() {
const { listNum, setListNum, currentMenu, setCurrentMenu } = useApplicationContext();
const [ changeNum, setChangeNum] = useState([]);

function randomNum () {
  while(changeNum.length < 4) {
      let num = parseInt(Math.random()*currentMenu.length);
      if(changeNum.indexOf(num) <0) {
        changeNum.push(num)
      }
    }
    console.log(changeNum);
}


function clickMore() {
    randomNum ()
    setListNum(changeNum)}
  console.log(listNum)

    return (
        <BtnDiv>
            <RecomendBtnStyle onClick={clickMore}>
              메뉴더보기
            </RecomendBtnStyle>
        </BtnDiv>
    );
}

const RecomendBtnStyle = styled.button`
  font-size: 10px;
  color: white;
  background-color: #a5a0a0;
  padding:5px;
  border-radius: 8px;
  height: 20px;
  width: 65px;
`;

const BtnDiv = styled.div`
  position: relative;
  top: 400px;

`
export default RecomendBtn;