import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { Map } from "react-map-gl";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import classes from "./Map.module.css";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { checkoutStatusFunc } from "../../Store/OrdersSlice";

export default function MapComponent() {
  const navigate = useNavigate();
  const checkoutStatus = useSelector(checkoutStatusFunc);
  const checkoutMapStatus= (window.location.href === "/checkoutMap" && checkoutStatus===true ) ;
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
  
  function okClickHandler(){
    //enforce the user to select some location else make the ok button show some error
    navigate("/orders/checkout");
  }
  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on("move", () => {
  //     setLng(map.current.getCenter().lng.toFixed(6));
  //     setLat(map.current.getCenter().lat.toFixed(6));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });
  
  return (
    <div>
      {checkoutMapStatus && <h2>Select Your Location</h2>}
      <div ref={mapContainer} className={classes.map_container}></div>
      {checkoutMapStatus && <button onClick={okClickHandler}>Ok</button>}
      {checkoutMapStatus && <button>Use Current Location</button>}
      <input />
    </div>
  );
}
