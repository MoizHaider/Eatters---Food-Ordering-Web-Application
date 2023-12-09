import React from "react";

export default function () {
  return (
    <div>
      <li>Items</li>
      <p>Choose Location</p>
        <button >Use Current Location</button>
        <button value="otherLocation">Other Location...</button>
      <div>Total Price</div>
      <button>Confirm Order</button>
    </div>
  );
}
