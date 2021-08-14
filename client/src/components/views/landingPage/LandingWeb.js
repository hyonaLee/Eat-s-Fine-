import React from "react";
import styled from "styled-components";
import InfoToday from "./InfoToday";
import RecomendBtn from "./RecomendBtn";
import Rainy from "./WeaterIMG/Rainy";
import { ApplicationContextProvider } from "../../../contexts/weatherAndMap_context";
import CurrentLocation from "./CurrentLocation";
import MyLocation from "../kakaoMap/MyLocation";
import Weather from "./Weather";
import HashTag from "./HashTag";
import SearchBoxMenu from "./SearchBoxMenu";
import ChangeLocationBtn from "./ChangeLocationBtn";

const MainDivStyle = styled.div`
  background-color: #a5a0a0;
  height: 100vh;
  margin: auto;
  text-align: center;
`;
function LandingWeb() {
  return (
    <MainDivStyle>
      <ApplicationContextProvider>
          <Rainy />
          <InfoToday /> <Weather />
          <HashTag />
          <RecomendBtn />
          <SearchBoxMenu />
          <CurrentLocation /> <MyLocation />
          <ChangeLocationBtn />
      </ApplicationContextProvider>
    </MainDivStyle>
  );
}
export default LandingWeb;
