import React, { useState, useEffect } from "react";
import { useMapContext } from "../../../contexts/map_context";

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
      <MapList list={list} />
    </div>
  );
}

function MapList({ list }) {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={item.index}>
            <span>{index+1} </span>
            <span>주소: {item.address_name}</span>
            <span>도로명주소: {item.road_address_name}</span>
            <span>가게명: {item.place_name}</span>
            <span>전화번호: {item.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapStoreList;
