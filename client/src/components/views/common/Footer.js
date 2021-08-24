import React from 'react';
import styled from "styled-components";

const FooterDiv = styled.div`
  display: block;
  color: gray;
  height: 20px;
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
