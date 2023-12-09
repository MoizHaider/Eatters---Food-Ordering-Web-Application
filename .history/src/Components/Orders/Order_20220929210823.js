import React from "react";

export default function (props) {
  return (
    <div>
      <div>
        <div>{props.name}</div>
        <button onClick={props.ondeleteClickHandler}>Remove from cart</button>
      </div>
      <div>{props.price}</div>
    </div>
  );
}
