import { useApplicationContext } from "./application_context";

import React from 'react'

function Geo() {

  const { setLatitude, setLongitude } = useApplicationContext();

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });
  return(
    <></>
  )
}

export default Geo
