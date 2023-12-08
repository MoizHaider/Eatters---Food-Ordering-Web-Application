import React from "react";

export default function (props) {
  function onRemoveHandler() {
    props.onDeleteClickHandler(props.index);
  }

  return (
    <div>
      <div>
        <div>{props.name}</div>
        <h1>{props.totalItmes}</h1>
        <button onClick={onRemoveHandler}>Remove from cart</button>
      </div>
      <div>{props.price}</div>
    </div>
  );
}
