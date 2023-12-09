import React, { useState } from "react";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import { orderedItems } from "../../Store/OrdersSlice";
export default function () {
    
    let orderItems = useSelector(orderedItems);
    console.log(orderItems);
    
    function onOrderClickHandler(){
        
    }
    function ondeleteClickHandler(){

    }
  return (
    <div>
      <h2>Cart</h2>
      <div>
        <div>{orderItems.map(data)}</div>
        <button onClick={ondeleteClickHandler}>Remove from cart</button>
      </div>
      <div>TTl prices</div>
      <button onClick={onOrderClickHandler} >Order Now</button>
      
    </div>
  );
}
