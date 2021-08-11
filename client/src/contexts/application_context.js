import React from "react";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ApplicationContextProvider({ children }) {
  const [locationSearch, setLocationSearch] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latlngValue, setLatlngValue] = useState({});

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  const value = {
    locationSearch,
    setLocationSearch,
    latitude,
    longitude,
    latlngValue,
    setLatlngValue,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useApplicationContext() {
  return useContext(Context);
}
