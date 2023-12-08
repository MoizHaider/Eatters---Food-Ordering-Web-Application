import React, { useState } from "react";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import { orderedItems } from "../../Store/OrdersSlice";
export default function () {
    [disabled, setDisabled] = useState(true);
    orderItems = useSelector(orderedItems);
    
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
