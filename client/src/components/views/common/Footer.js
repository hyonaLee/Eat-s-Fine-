import React from 'react';
import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: black;
  display: block;
  display: flex;
  justify-content: flex-start;
  color: white;
  height: 50px;
`;

function Footer() {
  return (
    <FooterDiv>
      <h2>Footer입니다.</h2>
    </FooterDiv>
  )
}

export default Footer
