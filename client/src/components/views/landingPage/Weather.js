import React, { useState, useEffect } from "react";
import axios from "axios";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";

function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const { locationSearch, longitude, latitude, latlngValue, setSky } =
    useApplicationContext();

  let latData = latitude;
  let lonData = longitude;

  if (locationSearch !== "") {
    latData = latlngValue.Ma;
    lonData = latlngValue.La;
  }

  async function test() {
    await axios({
      method: "post",
      url: "./api/weathers/today",
      data: {
        lat: latData,
        lon: lonData,
      },
    }).then(function (response) {
      console.log("서버에서 프론트로 돌려받음", response.data);
      setWeatherData(response.data);
    });
  }
  useEffect(() => {
    test();
  }, [latData, lonData, locationSearch]);

  let tmp = "";
  

  if (weatherData.length !== 0) {
    
    tmp = Number(weatherData[0].wea_val);
    console.log(tmp)

    if (tmp > 28) setSky("폭염이");
    else if (tmp < 5) setSky("한파");
    else if (weatherData[5].wea_val === "1") setSky("맑음이");
    else if (weatherData[6].wea_val === "3") setSky("눈이");
    else if (weatherData[6].wea_val === "4") setSky("소나기");
    else if (weatherData[6].wea_val === "1") setSky("비");
    else if (weatherData[6].wea_val === "2") setSky("비");
    else setSky("흐림이");
  }

  return <></>;
}

export default Weather;
