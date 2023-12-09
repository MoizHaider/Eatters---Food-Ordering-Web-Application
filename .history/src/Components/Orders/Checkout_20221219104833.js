import React from "react";

export default function () {
  return (
    <div>
      <li>Items</li>
      <p>Choose Location</p>
        <option value="currentLocation">Use Current Location</option>
        <option value="otherLocation">Other Location...</option>
      <div>Total Price</div>
      <button>Confirm Order</button>
    </div>
  );
}
