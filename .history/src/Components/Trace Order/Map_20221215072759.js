import React from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { Map } from 'react-map-gl';
import mapboxgl from '!mapbox-gl';


export default function MapComponent() {
      mapboxgl.accessToken
  return (
    <div>
      <Map></Map>
    </div>
  )
}
