import React, { useState } from "react";
import { useSelector } from "react-redux";
import {userData} from "../../Store/ProfileSlice";

export default function () {
  const [selectedLocation, setSelectedLocation] = useState(false);
  const userInfo = useSelector(userData);
  let longitude;
  let latitude;

  function getCoordinates(coords) {
    longitude = coords.coords.longitude;
    latitude = coords.coords.latitude;
    dispatch(getCoordinates())
  }

  function currentLocationClkHnadler() {
    if(userInfo.longitude === 0 && userInfo.latitude === 0 ){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
      } else {

      }
    }
    setSelectedLocation(true);
  }
  function otherLocationClkHandler() {
    setSelectedLocation(true);
  }

  return (
    <div>
      <li>Items</li>
      <p>Choose Location</p>
      {}
      <button onClick={currentLocationClkHnadler}>
        Use Current Location
      </button>
      <button onClick={otherLocationClkHandler}>Other Location...</button>
      <div>Total Price</div>
      <button>Confirm Order</button>
    </div>
  );
}
