import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import MapStoreList from "../kakaoMap/MapStoreList";
import MapContainer from "../kakaoMap/MapContainer";
import { MapContextProvider } from "../../../contexts/map_context";
import Weather from "./Weather";
import InfoToday from "./InfoToday";
import RecomendBtn from "./RecomendBtn";
import Cloud from "./WeaterIMG/Cloud";
import { ApplicationContextProvider } from "../../../contexts/weatherAndMap_context";

const MainDivStyle = styled.div`
  background-color: #a5a0a0;
  margin: auto;
  width: 100%;
`;
function Landing(props) {
  return (
    <>
      <MainDivStyle>
        <Cloud />
        <InfoToday />
        <RecomendBtn />
      </MainDivStyle>

      <ApplicationContextProvider>
        <MapContextProvider>
          <MapStoreList />
          <MapContainer />
        </MapContextProvider>
        <SearchBox />
        <Weather />
      </ApplicationContextProvider>
    </>
  );
}
export default Landing;
