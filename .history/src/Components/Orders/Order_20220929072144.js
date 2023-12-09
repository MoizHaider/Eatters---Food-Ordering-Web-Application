import React from "react";

export default function (props) {
  return (
    <div>
      <h2>Orders</h2>
      <div>
        <div>{props.name}</div>
        <button onClick={ondeleteClickHandler}>Remove from cart</button>
      </div>
      <div>{props.price}</div>
    </div>
  );
}
