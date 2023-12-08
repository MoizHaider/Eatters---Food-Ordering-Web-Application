import React from "react";

export default function (props) {
  return (
    <div>
      <div>
        <div>{props.name}</div>
        <button onClick={props.ondeleteClickHandler(props.id)}>Remove from cart</button>
      </div>
      <div>{props.price}</div>
    </div>
  );
}
