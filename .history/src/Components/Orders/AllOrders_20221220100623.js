import Order from "./Order";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import {
  orderBtnStatus,
  orderedItems,
  setCheckoutStatusStatic,
} from "../../Store/OrdersSlice";
import { nanoid } from "nanoid";
import { deleteOrder } from "../../Store/OrdersSlice";
import { useState } from "react";
import {Link} from "react-router-dom";

export default function AllOrders() {
  const [showCheckout, setShowCheckout] = useState(false);
  let index = 0;
  const dispatch = useDispatch();
  let orderItems = useSelector(orderedItems);
  let orderbtnStatus = useSelector(orderBtnStatus);
  let filteredArray = orderItems;

  function onOrderClickHandler() {
    setShowCheckout(true);
    setCheckoutStatusStatic(true);
  }
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
      <Outlet />
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
      <Link to={"checkout"}>
        <button onClick={onOrderClickHandler} disabled={orderbtnStatus}>
          Order Now
        </button>
      </Link>
    </div>
  );
}
