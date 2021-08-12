import React from 'react';
import styled from "styled-components";

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
`;

function Footer() {
  return (
    <FooterDiv>
      <h1>Footer입니다.</h1>
    </FooterDiv>
  )
}

export default Footer
