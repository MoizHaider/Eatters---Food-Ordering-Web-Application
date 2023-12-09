import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCoordsAction } from "../../Store/ProfileSlice";
import classes from "./HomeProfile.module.css";
import locationIcon from "../../Assets/locationIcon.png";

function HomeProfile(props) {
  const dispatch = useDispatch();
  let [click, setClick] = useState(0);
  let longitude, latitude;
  function getCoordinates(coords) {
    console.log(coords);
    longitude = coords.coords.longitude;
    latitude = coords.coords.latitude;
    dispatch(getCoordsAction(coords.coords));
    setClick(() => click + 1); //Rerendring the componenet so that when the user clicks this button the place where he live automatically gets displayed on the UI
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
    }
  }

  return (
    <div className={`${classes.container} ${props.className}`}>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        rel="stylesheet"
      />
      {/* <img src="" alt=""> */}
      <h1>Welecome! Food Lover</h1>
      <div className={classes.locItems}>
        <div>
          <div>Location: Multan</div>
          <button onClick={getLocation} className={classes.locBtn}>
            <img
              src={locationIcon}
              alt="Get my Location"
              className={classes.locIcon}
            />
          </button>
          <div> </div>
        </div>
      </div>
    </div>
  );
}
export default HomeProfile;
