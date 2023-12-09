import React from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { Map } from 'react-map-gl';
import mapboxgl from '!mapbox-gl';


export default function MapComponent() {
      mapboxgl.accessToken = `${process.env.REACT_APP_MAPS_ACCESS_TOKKEN}`;
  return (
    <div>
      <Map></Map>
    </div>
  )
}
