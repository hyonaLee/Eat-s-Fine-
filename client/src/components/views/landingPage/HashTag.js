import React from 'react';
import styled from 'styled-components';

function HashTag() {
    
    return (
            <HashDiv>
                <HashH2>
                    <span>#햄버거 </span>
                    <sapn>#치킨 </sapn>
                    <span>#족발 </span>
                    <span>#삼겹살 </span>
                </HashH2>
            </HashDiv>
    );
}


const HashDiv = styled.div`
position: relative;
top: 400px;
`;
const HashH2 = styled.h2`
  font-size: 25px;
  color: white;
  line-height: 50px;
`;


export default HashTag;