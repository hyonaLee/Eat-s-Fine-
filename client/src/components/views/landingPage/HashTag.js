import React from 'react';
import styled from 'styled-components';

function HashTag() {
    
    return (
        <>
            <HashH1>
                <span>#햄버거 </span>
                <span>#치킨 </span>
                <span>#곱창 </span>
                <span>#삼겹살 </span>
            </HashH1>
        </>
    );
}


const HashH1 = styled.h1`
  font-size: 25px;
  font-weight: nomal;
  color: white;
  line-height: 50px;
`;


export default HashTag;