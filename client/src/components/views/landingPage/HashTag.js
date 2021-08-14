import React from 'react';
import styled from 'styled-components';

function HashTag() {
    
    return (
        <>
            <HashDiv>
                <HashH1>
                    <span>#햄버거 </span>
                    <sapn>#치킨 </sapn>
                    <span>#족발 </span>
                    <span>#삼겹살 </span>
                </HashH1>
            </HashDiv>
        </>
    );
}


const HashDiv = styled.div`
position: relative;
top: 350px;
`;
const HashH1 = styled.h1`
  font-size: 25px;
  color: white;
  line-height: 50px;
`;


export default HashTag;