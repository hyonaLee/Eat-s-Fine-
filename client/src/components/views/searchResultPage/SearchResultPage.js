import React, { useEffect } from "react";

import MapStoreList from "../kakaoMap/MapStoreList";
import { useMapContext } from "../../../contexts/map_context";
function SearchResultPage() {
  const { mapSearchData } = useMapContext();
  if (mapSearchData.length === 0) console.log("검색결과가 없습니다.");

  return (
    <div>{
      <MapStoreList />
      }
    </div>
  );
}
export default SearchResultPage;
