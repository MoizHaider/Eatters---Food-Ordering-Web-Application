import React from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { Map } from 'react-map-gl';
import mapboxgl from '!mapbox-gl';


export default function MapComponent() {
      

      mapboxgl.accessToken = `${process.env.REACT_APP_MAPS_ACCESS_TOKKEN}`;
      useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
        });
        });
  return (
    <div>
      <Map></Map>
    </div>
  )
}
