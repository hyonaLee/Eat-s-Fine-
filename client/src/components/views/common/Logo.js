import styled from "styled-components";
import React from 'react';


const LogoH1 = styled.h1`
  margin: 0;
  color: white;
  /* @media screen and (max-width: 768px) {
    font-size: 1.1em;
   } */
`;

function Logo() {
  return (
      <LogoH1>Eat's Fine!</LogoH1>
  )
}
export default Logo
