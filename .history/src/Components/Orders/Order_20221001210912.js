import React from "react";

export default function (props) {
  function onRemoveHandler() {
    let orderBtnStatus = fal
    if (filteredArray.length === 0) {
        
    }
    props.onDeleteClickHandler(props.index);
  }
  
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
