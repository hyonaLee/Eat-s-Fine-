import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import Rainy from "./WeaterIMG/Rainy";
import Cloud from "./WeaterIMG/Cloud";
import Snow from "./WeaterIMG/Snow";
import Sun from "./WeaterIMG/Sun";
import Thunder from "./WeaterIMG/Thunder";

function InfoWeather() {
  const { sky, setSky } = useApplicationContext();
  const CurrentWeatherData = { sky };
  const [todayWeat, setTodayWeat] = useState(<Cloud />);

  useEffect(() => {
    if (CurrentWeatherData.sky === "맑음") setTodayWeat(<Sun />);
    else if (CurrentWeatherData.sky === "비") setTodayWeat(<Rainy />);
    else if (CurrentWeatherData.sky === "소나기") setTodayWeat(<Rainy />);
    else if (CurrentWeatherData.sky === "눈") setTodayWeat(<Snow />);
    else setTodayWeat(<Cloud />);
  }, [setSky, sky]);

  return <WeatherDiv>
        {todayWeat}
    </WeatherDiv>;
}

const WeatherDiv = styled.div`
  height: 230px;
  @media screen and (max-width: 768px) {
    height: 100px;
   }
`;

export default InfoWeather;
