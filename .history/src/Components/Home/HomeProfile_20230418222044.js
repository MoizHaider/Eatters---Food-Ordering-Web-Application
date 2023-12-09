import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {getCoordsAction} from "../../Store/ProfileSlice"
import classes from "./HomeProfile.module.css";

function HomeProfile() {
  const dispatch = useDispatch();
  let [click, setClick] = useState(0);
  let longitude, latitude;
  function getCoordinates(coords) {
    console.log(coords);
    longitude = coords.coords.longitude;
    latitude = coords.coords.latitude;
    dispatch(getCoordsAction(coords.coords));
    setClick(() => click + 1);//Rerendring the componenet so that when the user clicks this button the place where he live automatically gets displayed on the UI
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
    }
  }

  return (
    <div className = {classes.container}>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        rel="stylesheet"
      />
      {/* <img src="" alt=""> */}
      <h3>Welecome</h3>
      <div>Location</div>
      <button onClick={getLocation}>
        img
      </button>
    </div>
  );
}
export default HomeProfile;
