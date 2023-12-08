import React from 'react';
import { useLoadScript } from '@react-google-maps/api';


export default function Map() {
  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = `${REACT_APP_MAPS_ACCESS_TOKKEN}`;
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});    
  return (
    <div>{map}</div>
  )
}
