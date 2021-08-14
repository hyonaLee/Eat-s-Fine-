import React from 'react';
import styled from 'styled-components';
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function CurrentLocation() {
  const {myLocation} = useApplicationContext();
  console.log("내위치"+myLocation)
    return (


        <LocationDiv>
            <LocationH1>{myLocation}</LocationH1>
        </LocationDiv>


    );
}


const LocationH1 = styled.h3`
  font-size: 20px;
  font-weight: border;
  color: white;
`;
const LocationDiv = styled.div`
  position: relative;
  top: 350px;
  `;

export default CurrentLocation;