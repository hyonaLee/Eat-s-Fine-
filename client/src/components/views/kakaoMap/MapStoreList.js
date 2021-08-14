import React, { useState, useEffect } from "react";
import { useMapContext } from "../../../contexts/map_context";
import StoreInfo from "./StoreInfo";

function MapStoreList() {

  const { mapSearchData } = useMapContext();
  const [list, setList] = useState([]);

  useEffect(() => {
    if (mapSearchData.length !== 0) {
      setList(mapSearchData);
      console.log("리스트추출", mapSearchData);
    }
  }, [mapSearchData]);

  return (
    <div>
      <StoreInfo list={list} />
    </div>
  );
}

export default MapStoreList;
