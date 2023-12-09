import React, { useState } from "react";

export default function () {
  const [selectedLocation , useSelectedLocation]=useState(false);

  return (
    <div>
      <li>Items</li>
      <p>Choose Location</p>
      <button onClick={useCurrentLocationHnadler}>Use Current Location</button>
      <button onClick = {otherLocationClkHandler}>Other Location...</button>
      <div>Total Price</div>
      <button>Confirm Order</button>
    </div>
  );
}
