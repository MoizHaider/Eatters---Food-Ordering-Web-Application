import React from "react";

export default function (props) {
  function onRemoveHandler(){
    props.on
  }

  return (
    <div>
      <div>
        <div>{props.name}</div>
        <button onClick ={onRemoveHandler}>Remove from cart</button>
      </div>
      <div>{props.price}</div>
    </div>
  );
}
