import React, { useState } from "react";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import { orderedItems } from "../../Store/OrdersSlice";
export default function () {
    
    let orderItems = useSelector(orderedItems);
    console.log(orderItems);
    console.log("he")
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
      <button onClick={onOrderClickHandler} >Order Now</button>
      
    </div>
  );
}
