import React from "react";
import { useMapContext } from "../../../contexts/map_context";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import MapContainer from "./MapContainer";
import StoreInfo from "./StoreInfo";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import SearchNoResult from "../searchResultPage/SearchNoResult";

function MapStoreList() {
  const { mapSearchData } = useMapContext();
  const { clearData } = useApplicationContext();
  const history = useHistory();

    return (
      <ResultDiv>
        <div>
          <StoreInfo list={mapSearchData} />
        </div>
        <MapDiv>
          <MapContainer />
        </MapDiv>
      </ResultDiv>
    );
  
}

const ResultDiv = styled.div`
  display: flex;
  justify-content: space-space-between;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const MapDiv = styled.div`
  width: 100%;
  height: 830px;
  margin: 0;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default MapStoreList;
