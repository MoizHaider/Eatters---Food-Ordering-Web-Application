import React, { useState } from "react";

export default function () {
  const [selectedLocation, setSelectedLocation] = useState(false);
  cont 

  function currentLocationClkHnadler() {
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
