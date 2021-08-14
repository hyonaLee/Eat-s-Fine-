import React from "react";
import styled from "styled-components";

import { ApplicationContextProvider } from "../../../contexts/weatherAndMap_context";
import CurrentLocation from "./CurrentLocation";
import MyLocation from "../kakaoMap/MyLocation";
import MapContainer from "../kakaoMap/MapContainer";
import MapStoreList from "../kakaoMap/MapStoreList";
import { MapContextProvider } from "../../../contexts/map_context";

const MainDivStyle = styled.div`
  background-color: #a5a0a0;
  margin: auto;
  width: 100%;
`;
function SearchAndList() {
  return (
    <MainDivStyle>
      <ApplicationContextProvider>
        <MapContextProvider>
          <CurrentLocation />
          <MyLocation />
          <MapStoreList />
          <MapContainer />
        </MapContextProvider>
      </ApplicationContextProvider>
    </MainDivStyle>
  );
}
export default SearchAndList;
