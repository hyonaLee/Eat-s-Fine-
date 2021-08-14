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
          <li
            style={{
              border: "1px solid black",
              color: "black",
              cursor: "pointer",
            }}
            key={item.index}
          >
            <div
              onClick={() =>
                window.open(`http://place.map.kakao.com/${item.id}`, "_blank")
              }
            >
              <span>{index + 1} </span>
              <span>주소: {item.address_name}</span>
              <span>도로명주소: {item.road_address_name}</span>
              <span>가게명: {item.place_name}</span>
              <span>전화번호: {item.phone}</span>
            </div>
            <div>
              <button
                item={item}
              >
                찜하기
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapStoreList;
