import React from "react";

export default function (props) {
  function onRemoveHandler(){
    props.onDeleteClickHandler(props.ind);
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
