import React, { useState } from "react";
import Checkout from "./Checkout";
export default function () {
    [disabled, setDisabled] = useState(true);

    function onClickHandler(){
        if()
    }
  return (
    <div>
      <h2>Cart</h2>
      <div>
        <div>mapped Items Names</div>
        <button>Remove from cart</button>
      </div>
      <div>TTl prices</div>
      <button onClick={onClickHandler} disabled = >Order Now</button>
      {}
    </div>
  );
}
