import React from 'react';
import styled from "styled-components";

const FooterDiv = styled.div`
  display: block;
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  color: gray;
  height: 20px;
  margin: 0;
  @media screen and (max-width: 768px) {
    display: none;
   }
`;

function Footer() {
  return (
    <FooterDiv>
      <p>Copyright ©2021</p>
    </FooterDiv>
  )
}

export default Footer
