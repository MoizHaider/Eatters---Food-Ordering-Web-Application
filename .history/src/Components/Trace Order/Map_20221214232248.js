import React from 'react';
import { useLoadScript } from '@react-google-maps/api';


export default function Map() {
  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});    
  return (
    <div>{}</div>
  )
}
