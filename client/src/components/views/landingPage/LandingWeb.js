import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import InfoToday from "./InfoToday";
import RecomendBtn from "./RecomendBtn";
import Cloud from "./WeaterIMG/Cloud";
import { ApplicationContextProvider } from "../../../contexts/weatherAndMap_context";
import CurrentLocation from "./CurrentLocation";
import MyLocation from "../kakaoMap/MyLocation";
import MapContainer from '../kakaoMap/MapContainer';
import MapStoreList from '../kakaoMap/MapStoreList';
import Weather from './Weather';
import { MapContextProvider } from '../../../contexts/map_context';
import HashTag from "./HashTag";

const MainDivStyle = styled.div`
  background-color: #a5a0a0;
  margin: auto;
  width: 100%;
`;
function Landing(props) {
  return (
    <>

     <ApplicationContextProvider>
      <MainDivStyle>
        <Cloud />
        <InfoToday />
        <HashTag/>
        <RecomendBtn />
        <SearchBox />
        <CurrentLocation />
        <MyLocation/>
        </MainDivStyle>
        <Weather/>
      </ApplicationContextProvider>
    </>
  );
}
export default Landing;
