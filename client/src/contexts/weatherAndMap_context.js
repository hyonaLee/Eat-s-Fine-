import React from "react";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ApplicationContextProvider({ children }) {
  const [locationSearch, setLocationSearch] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latlngValue, setLatlngValue] = useState({});
  const [myLocation, setMyLocation] = useState("");
  const [sky, setSky] = useState("");
  const [currentMenu, setCurrentMenu] = useState([])
  const [listNum, setListNum] = useState([0,1,2,3])

  const value = {
    locationSearch,
    setLocationSearch,
    latitude,
    longitude,
    latlngValue,
    setLatlngValue,
    setLatitude,
    setLongitude,
    setMyLocation,
    myLocation,
    sky,
    setSky,
    currentMenu,
    setCurrentMenu,
    listNum,
    setListNum
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useApplicationContext() {
  return useContext(Context);
}
