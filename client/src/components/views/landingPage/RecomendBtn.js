import React from 'react';
import { Route,Link } from 'react-router-dom';
import styled from 'styled-components';
import auth from '../../../hoc/auth';
import ChangeLocation from '../changeLocation/ChangeLocation';

function RecomendBtn() {
    return (
        <BtnDiv>
            <Link to="/changelocation">
            <RecomendBtnStyle>
            직접찾아보기
            </RecomendBtnStyle></Link>
            {/* <Route exact path="/changelocation" component={auth(ChangeLocation, false)} /> */}
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