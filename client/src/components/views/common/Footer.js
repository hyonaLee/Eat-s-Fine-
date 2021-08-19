import React from 'react';
import styled from "styled-components";

const FooterDiv = styled.div`
  display: block;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  color: gray;
  height: 40px;
`;

function Footer() {
  return (
    <FooterDiv>
      <p>Copyright ©2021</p>
    </FooterDiv>
  )
}

export default Footer
