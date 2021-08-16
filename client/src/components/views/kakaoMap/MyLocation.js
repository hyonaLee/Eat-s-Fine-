import React from "react";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
function MyLocation() {
  const { longitude, latitude, setLatitude, setLongitude, setMyLocation } =
    useApplicationContext();

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });
  let locPosition = new window.kakao.maps.LatLng(latitude, longitude);
  const geocoder = new window.kakao.maps.services.Geocoder();
  function searchDetailAddrFromCoords(coords, callback) {
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }
  searchDetailAddrFromCoords(locPosition, function (result, status) {
    if (status === window.kakao.maps.services.Status.OK) {
      setMyLocation(result[0].address.address_name);
    }
  });
  
  return <div></div>;
}

export default MyLocation;
