import React from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function CurrentLocation() {
  const { myLocation } = useApplicationContext();

  return (
    <LocationDiv>
      <LocationH1>{myLocation}</LocationH1>
    </LocationDiv>
  );
}

const LocationH1 = styled.h3`
  font-size: 15px;
  color: white;
`;
const LocationDiv = styled.div`
  display: inline-block;
  position: relative;
  top: 420px;
`;

export default CurrentLocation;
