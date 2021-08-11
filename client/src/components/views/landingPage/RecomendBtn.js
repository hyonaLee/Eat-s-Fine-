import React from 'react';
import { Route,Link } from 'react-router-dom';
import styled from 'styled-components';
import MapDetail from './MapDetail';

function RecomendBtn() {
    return (
        <div>
            <Link to="/recomend">
            <RecomendBtnStyle>
            직접찾아보기
            </RecomendBtnStyle></Link>
            <Route path="/recomend" component={MapDetail} />
        </div>
    );
}

const RecomendBtnStyle = styled.button`
  font-size: 25px;
  font-weight: nomal;
  color: black;
  background-color: yellow;
  
`;

export default RecomendBtn;