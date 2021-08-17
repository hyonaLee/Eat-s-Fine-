import React from "react";
import { useMapContext } from "../../../contexts/map_context";
import MapContainer from "./MapContainer";
import StoreInfo from "./StoreInfo";

function MapStoreList() {
  const { mapSearchData } = useMapContext();
  console.log("정보가져옴2", mapSearchData);
  if (mapSearchData.length === 0) console.log("검색결과가 없습니다.");
  return (
    <div>
      <StoreInfo list={mapSearchData} />
      <MapContainer />
    </div>
  );
}
export default MapStoreList;
