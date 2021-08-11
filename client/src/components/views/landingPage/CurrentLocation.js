import React from 'react';
import styled from 'styled-components';

function CurrentLocation() {
    return (
        <>
            <LocationH1>Location</LocationH1>
        </>
    );
}


const LocationH1 = styled.h1`
  font-size: 35px;
  font-weight: border;
  color: white;
`;

export default CurrentLocation;