import React from "react";
import Checkout from "./Checkout";
export default function () {
    function onClickHandler(){
        
    }
  return (
    <div>
      <h2>Cart</h2>
      <div>
        <div>mapped Items Names</div>
        <button>Remove from cart</button>
      </div>
      <div>TTl prices</div>
      <button onClick={onClickHandler}>Order Now</button>
      {}
    </div>
  );
}
