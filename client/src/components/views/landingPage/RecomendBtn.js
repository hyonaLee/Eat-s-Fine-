import React from 'react';
import { Route,Link } from 'react-router-dom';
import styled from 'styled-components';
import MapDetail from './MapDetail';

function RecomendBtn() {
    return (
        <BtnDiv>
            <Link to="/recomend">
            <RecomendBtnStyle>
              추천메뉴보기
            </RecomendBtnStyle></Link>
            <Route path="/recomend" component={MapDetail} />
        </BtnDiv>
    );
}

const RecomendBtnStyle = styled.button`

  font-size: 20px;
  font-weight: nomal;
  color: white;
  background-color: #a5a0a0;
  padding:10px;
  border-radius: 8px;
  height: 50px;
`;

const BtnDiv = styled.div`
  position: relative;
  top: 600px;

`
export default RecomendBtn;