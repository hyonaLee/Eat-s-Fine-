import React from "react";
import { useMapContext } from "../../../contexts/map_context";
import MapContainer from "./MapContainer";
import StoreInfo from "./StoreInfo";
import styled from "styled-components";


function MapStoreList() {
  const { mapSearchData } = useMapContext();
  console.log("정보가져옴2", mapSearchData);
  if (mapSearchData.length === 0) console.log("검색결과가 없습니다.");
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
`
const MapDiv = styled.div`
  width: 100%;
  height: 900px;
  margin: 0;
  margin-top: 30px;
`

export default MapStoreList;
