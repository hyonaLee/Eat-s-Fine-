import React from 'react';
import styled from 'styled-components';
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function RecomendBtn() {
const { listNum, setListNum } = useApplicationContext();

function clickMore() {
  setListNum(
    listNum.map(index => index+4)
  )
}
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