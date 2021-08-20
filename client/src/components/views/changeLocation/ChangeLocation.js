import React from 'react'
import { MapContextProvider, useMapContext } from '../../../contexts/map_context'
import { ApplicationContextProvider } from '../../../contexts/weatherAndMap_context'
import MapStoreList from '../kakaoMap/MapStoreList'
import Weather from '../landingPage/Weather'
import SearchBoxLocation from './../landingPage/SearchBoxLocation';
import MapContainer from './../kakaoMap/MapContainer';
import ChangeMap from './../kakaoMap/ChangeMap';

function ChangeLocation() {
  return (
    <ApplicationContextProvider>
      <SearchBoxLocation/>
      <ChangeMap/>
     
  </ApplicationContextProvider>
  )
}

export default ChangeLocation
