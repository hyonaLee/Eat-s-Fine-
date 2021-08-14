import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ChangeLocationBtn() {
    return (
        <BtnDiv>
            <Link to="/changelocation">
            <ChangeLocationBtnStyle>
              위치변경
            </ChangeLocationBtnStyle></Link>
        </BtnDiv>
    );
}

const ChangeLocationBtnStyle = styled.button`

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
export default ChangeLocationBtn;