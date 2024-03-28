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
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Order from "./Order";
import Message from "../Message";


export default function AllOrders() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showMessage, setShowMessage] = useState(false)
  
  let index = 0;
  let ttlPrice = 0;
  const dispatch = useDispatch();
  let orderItems = useSelector(orderedItems);

  let filteredArray = orderItems;



const orderbtnStatus = orderItems.length > 0 ? true : false;


 filteredArray.forEach((item)=>{
    ttlPrice += item.counter * item.price
 })
  function onOrderClickHandler() {
    setShowCheckout(true);
    dispatch(setCheckoutStatusStatic(true));
  }
  function ondeleteClickHandler(index) {
    let orderButtonStatus = false;
    if (filteredArray.length === 1) {
      orderButtonStatus = true;
    }
    dispatch(deleteOrder({ index, orderButtonStatus }));
  }
  return (
    <div>
      <Outlet />
      {showMessage && <Message message="Order placed Successfully" type = "success" duration = {3}/>}
      {showCheckout && <Checkout ttlPrice = {ttlPrice} setShowCheckout={setShowCheckout} setShowMessage = {setShowMessage}/>}
      {/* ----------------------------------- Cart ------------------------------------------- */}
      <section
        className="h-fit bg-gray-100 text-gray-600 antialiased "
        x-data="app"
      >
        <div className="flex h-fit flex-col justify-center mt-2 ">
          <div className=" w-full h-full rounded-sm bg-white ">
            <header className="border-b border-gray-300 px-5 py-4">
              <div className="font-semibold text-gray-800">Manage Carts</div>
            </header>

            <div className="overflow-x-auto p-3 ">
              <table className="w-full table-auto">
                <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                  <tr>
                    <th></th>
                    <th className="p-2">
                      <div className="text-left font-semibold">Name</div>
                    </th>
                    <th className="p-2">
                      <div className="text-left font-semibold">Quantity</div>
                    </th>
                    <th className="p-2">
                      <div className="text-left font-semibold">Total</div>
                    </th>
                    <th className="p-2">
                      <div className="text-center font-semibold">Action</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 text-sm">
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
                </tbody>
              </table>
            </div>

            <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
              <div>Total</div>
              <div className="text-green-600">
                $ <span x-text="total.toFixed(2)">{ttlPrice}</span>
              </div>
            </div>
            <div className="px-4 py-4 flex justify-center">
              <button
                className={`border-2 px-4 py-2 ${orderbtnStatus ? "bg-primary":"bg-gray-400"} rounded-[10px] w-[50%] lg:w-[20%] text-white font-semibold`}
                onClick={onOrderClickHandler}
                disabled={!orderbtnStatus}
              >
                Order Now
              </button>
            </div>

            <div className="flex justify-end">
              <input
                type="hidden"
                className="border border-black bg-gray-50"
                x-model="selected"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
