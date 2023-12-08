import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { Map } from "react-map-gl";
import mapboxgl from "!mapbox-gl";
import classes from "./Map.module.css"

export default function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  mapboxgl.accessToken = `${process.env.REACT_APP_MAPS_ACCESS_TOKKEN}`;
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div>
      <div className={classes.sidebar}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className={classes.map - container}></div>
    </div>
  );
}
