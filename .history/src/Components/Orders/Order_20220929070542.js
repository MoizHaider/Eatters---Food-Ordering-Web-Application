import React, { useState } from "react";

export default function (props) {
  return (
    <div>
      <h2>Cart</h2>
      <div>
        <div>{props.name}</div>
        <button onClick={ondeleteClickHandler}>Remove from cart</button>
      </div>
      <div>TTl prices</div>
      <button onClick={onOrderClickHandler}>Order Now</button>
    </div>
  );
}
