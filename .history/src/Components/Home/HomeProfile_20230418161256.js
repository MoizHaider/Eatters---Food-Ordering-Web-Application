import axios from "axios";
import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { useDispatch } from "react-redux";
import {getCoordsAction} from "../../Store/ProfileSlice"

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

  // useEffect(() => {
  //   console.log("sup");

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // },[]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
    }
  }

  return (
    <div>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        rel="stylesheet"
      />
      {/* <img src="" alt=""> */}//dummy use
      <h3>Diliver to</h3>
      <div>Location</div>
      <button onClick={getLocation}>Get Location</button>
    </div>
  );
}
export default HomeProfile;
