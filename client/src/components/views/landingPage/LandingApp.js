import React from "react";
import styled from "styled-components";
import CurrentLocation from "./CurrentLocation";
import CurrentWeather from "./CurrentWeather";
import HashTag from "./HashTag";
import InfoToday from "./InfoToday";
import RecomendBtn from "./RecomendBtn";
const MainDivStyle = styled.div`
  background-color: #282c34;
  margin: auto;
  padding: 50px 20px;
  width: 450px;
  height: 800px;
  border-radius: 40px;
`;

function Landing(props) {
  return (
    <MainDivStyle>
      <CurrentLocation />
      <CurrentWeather />
      <InfoToday />
      <HashTag />
      <RecomendBtn />
    </MainDivStyle>
  );
}

export default Landing;
