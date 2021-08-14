import React from "react";
import { MapContextProvider } from "../../../contexts/map_context";
import MapContainer from "../kakaoMap/MapContainer";
import MapStoreList from "../kakaoMap/MapStoreList";
import SearchBoxMenu from "../landingPage/SearchBoxMenu";

function SearchResultPage() {
  return (
    <div>
      <MapContextProvider>
        <MapContainer />
        <MapStoreList />
        <SearchBoxMenu />
      </MapContextProvider>
    </div>
  );
}

export default SearchResultPage;
