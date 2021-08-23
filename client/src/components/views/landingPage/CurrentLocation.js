import React from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function CurrentLocation() {
  const { myLocation, myLocationChg, myNewLocation } = useApplicationContext();

 
    return (
      <LocationDiv>
        <LocationH1>{myLocation}</LocationH1>
      </LocationDiv>
    );
}

const LocationH1 = styled.h3`
  font-size: 15px;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 12px;
   }
`;
const LocationDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 10px;
   }
`;

export default CurrentLocation;
