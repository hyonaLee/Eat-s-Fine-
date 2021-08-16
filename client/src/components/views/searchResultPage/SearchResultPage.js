import React from "react";
import MapContainer from "../kakaoMap/MapContainer";
import MapStoreList from "../kakaoMap/MapStoreList";
import SearchBoxMenu from "../landingPage/SearchBoxMenu";

function SearchResultPage() {
  return (
    <div>
        <MapContainer />
        <MapStoreList />
        <SearchBoxMenu />
    </div>
  );
}

export default SearchResultPage;
