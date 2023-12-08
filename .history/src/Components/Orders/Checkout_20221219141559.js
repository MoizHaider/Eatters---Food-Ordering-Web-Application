import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userData} from "../../Store/ProfileSlice";
import { getCoordsAction } from "../../Store/ProfileSlice";

export default function () {
  const [selectedLocation, setSelectedLocation] = useState(false);
  const userInfo = useSelector(userData);
  const dispatch = useDispatch();
  

  function getCoordinates(coords) {
    const longitude = coords.coords.longitude;
    const latitude = coords.coords.latitude;
    dispatch(getCoordsAction(coords.coords))
  }

  function currentLocationClkHnadler() {
    if(userInfo.longitude === 0 && userInfo.latitude === 0 ){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
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
