import React, { useState } from "react";
import { useSelector } from "react-redux";
import {userData} from "../../Store/ProfileSlice";

export default function () {
  const [selectedLocation, setSelectedLocation] = useState(false);
  const userInfo = useSelector(userData);

  function currentLocationClkHnadler() {
    if(userInfo.longitude )
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
