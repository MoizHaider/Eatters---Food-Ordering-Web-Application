import React from "react";

export default function () {
  return (
    <div>
      <li>Items</li>
      <select>
      <option value="currentLocation">To Current Location</option>
      <option value="otherLocation">Select Other Location</option>
      </select>
      <div>Total Price</div>
      <button>Confirm Order</button>
    </div>
  );
}
