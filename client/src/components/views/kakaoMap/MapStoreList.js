import React from "react";
import { useMapContext } from "../../../contexts/map_context";
import StoreInfo from "./StoreInfo";

function MapStoreList() {
  const { mapSearchData } = useMapContext();
  console.log("첨부터", mapSearchData);

  return (
    <div>
      <StoreInfo list={mapSearchData} />
    </div>
  );
}
export default MapStoreList;
