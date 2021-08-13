import React from 'react';
import styled from 'styled-components';

function HashTag() {
    
    return (
        <>
            <HashDiv>
                <HashH1>#햄버거 </HashH1>
                <HashH1>#치킨 </HashH1>
                <HashH1>#곱창 </HashH1>
                <HashH1>#삼겹살 </HashH1>
            </HashDiv>
        </>
    );
}


const HashDiv = styled.div`
position: relative;
top: 300px;
`;
const HashH1 = styled.h1`
  font-size: 25px;
  color: white;
  line-height: 50px;
`;


export default HashTag;