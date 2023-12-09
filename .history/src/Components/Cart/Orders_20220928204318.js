import React, { useState } from "react";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import or
export default function () {
    [disabled, setDisabled] = useState(true);
    useSelector
    function onOrderClickHandler(){
        
    }
    function ondeleteClickHandler(){

    }
  return (
    <div>
      <h2>Cart</h2>
      <div>
        <div>mapped Items Names</div>
        <button onClick={ondeleteClickHandler}>Remove from cart</button>
      </div>
      <div>TTl prices</div>
      <button onClick={onOrderClickHandler} disabled = {disabled}>Order Now</button>
      {}
    </div>
  );
}
