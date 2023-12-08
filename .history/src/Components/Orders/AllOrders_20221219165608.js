import Order from "./Order";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import { orderBtnStatus, orderedItems } from "../../Store/OrdersSlice";
import { nanoid } from "nanoid";
import { deleteOrder } from "../../Store/OrdersSlice";
import { useState } from "react";

export default function AllOrders() {
  [showCheckout, setShowCheckout] = useState()
  let index = 0;
  const dispatch = useDispatch();
  let orderItems = useSelector(orderedItems);
  let orderbtnStatus = useSelector(orderBtnStatus);
  let filteredArray = orderItems;

  function onOrderClickHandler() {}
  function ondeleteClickHandler(index) {
    let orderButtonStatus = false;
    console.log(filteredArray.length);
    if (filteredArray.length === 1) {
      orderButtonStatus = true;
    }
    dispatch(deleteOrder({ index, orderButtonStatus }));
  }
  return (
    <div>
      
      <h2>Orders</h2>
      {filteredArray.map((data) => (
        <Order
          name={data.name}
          price={data.multipleItemsPrice}
          id={data.id}
          onDeleteClickHandler={ondeleteClickHandler}
          key={nanoid()}
          index={index++}
          counter={data.counter}
        ></Order>
      ))}
      <button onClick={onOrderClickHandler} disabled={orderbtnStatus}>
        Order Now
      </button>
    </div>
  );
}
