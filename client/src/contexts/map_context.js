import React from "react";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function MapContextProvider({ children }) {
  const [mapSearchData, setMapSearchData] = useState([]);
  const [listExist, setListExist] = useState(undefined);

  const value = {
    setMapSearchData,
    mapSearchData,
    setListExist,
    listExist,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useMapContext() {
  return useContext(Context);
}
