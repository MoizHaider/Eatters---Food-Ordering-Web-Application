import React from "react";

export default function (props) {
  function onRemoveHandler() {
    props.onDeleteClickHandler(props.index);
  }
  console.log(props.counter);
  return (
    <div>
      <div>
        <div>{props.name}</div>
        <h1>{props.counter}</h1>
        <button onClick={onRemoveHandler}>Remove from cart</button>
      </div>
      <div>{props.price}</div>
    </div>
  );
}
