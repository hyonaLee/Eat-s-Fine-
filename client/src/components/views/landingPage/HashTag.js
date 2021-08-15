import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function HashTag() {
  const { sky, setSky } = useApplicationContext();
  const CurrentWeatherData = { sky };
  const [todayMenu, setTodayMenu] = useState("#");

  useEffect(() => {
    if (CurrentWeatherData.sky === "맑음") setTodayMenu("#치킨");
    else if (CurrentWeatherData.sky === "비") setTodayMenu("#파전");
    else if (CurrentWeatherData.sky === "소나기") setTodayMenu("#닭볶음탕");
    else if (CurrentWeatherData.sky === "눈") setTodayMenu("#수제비");
    else setTodayMenu("#삼겹살");
  }, [setSky]);

  return (
    <HashDiv>
      <HashH2>
        <span>{todayMenu}</span>
      </HashH2>
    </HashDiv>
  );
}

const HashDiv = styled.div`
  position: relative;
  top: 400px;
`;
const HashH2 = styled.h2`
  font-size: 25px;
  color: white;
  line-height: 50px;
`;

export default HashTag;
