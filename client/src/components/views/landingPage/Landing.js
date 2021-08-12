import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import MapStoreList from "../kakaoMap/MapStoreList";
import MapContainer from "../kakaoMap/MapContainer";
import { MapContextProvider } from "../../../contexts/map_context";
import Weather from "./Weather";

import { ApplicationContextProvider } from "../../../contexts/application_context";

function Landing(props) {
  return (
    <ApplicationContextProvider>
    <MapContextProvider>
      <MapStoreList />
      <MapContainer />
    </MapContextProvider>
    <SearchBox />
    <Weather />
  </ApplicationContextProvider>
  );
}

export default Landing;
