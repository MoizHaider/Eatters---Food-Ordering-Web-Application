import React, { useState } from "react";

export default function () {
  const [selectedLocation, setSelectedLocation] = useState(false);

  function CurrentLocationClkHnadler() {
    useSelectedLocation(true);
  }
  function otherLocationClkHandler() {
    useSelectedLocation(true);
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
