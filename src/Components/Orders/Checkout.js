import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { userData } from "../../Store/ProfileSlice";
import Modal from "../Modal";
import { getCoordsAction } from "../../Store/ProfileSlice";

export default function ({ ttlPrice, setShowCheckout, setShowMessage }) {

  
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(false);
  const userInfo = useSelector(userData);
  const dispatch = useDispatch();
  const [locationVal, setLocationVal] = useState();

  function generateAddress(address) {
    const { municipality, suburb, city, village, road, district, state } = address;
    let addressString = "";
    if (road) addressString += road + ", ";

    if (municipality) addressString += municipality + ", ";
    else if (suburb) addressString += suburb + ", ";

    if (city) addressString += city + ", ";
    else if (district) addressString += district + ", ";
    else if (village) addressString += village + ", ";
    else if (state) addressString += state + ", ";

    return addressString.slice(0,-2)
  }

  async function getCoordinates(coords) {
    const longitude = coords.coords.longitude;
    const latitude = coords.coords.latitude;

    const res = await fetch(
      `https://us1.locationiq.com/v1/reverse?key=${process.env.REACT_APP_GEOLOCATION_API_TOKEN}&lat=${latitude}&lon=${longitude}&format=json`
    );
    const data = await res.json();
    const address = generateAddress(data.address);
    setLocationVal(address)
  }

  function currentLocationClkHnadler() {
    if (userInfo.longitude === 0 && userInfo.latitude === 0) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
      } else {
      }
    }
    setSelectedLocation(true);
  }
  function otherLocationClkHandler() {
    setSelectedLocation(true);
  }
  function onLocationChange(event) {
    setLocationVal(event.currentTarget.value);
  }

  return (
    <Modal isOpen={true}>
      {" "}
      <div className="w-[90%] h-[50%] xs:w-[70%] xs:h-[50%] sm:w-[50%] sm:h-[50%] flex flex-col justify-between bg-white px-4 py-6 rounded-[10px] shadow-xl">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">Checkout</h2>

        <div className="flex flex-col  gap-y-2">
          <p>Enter Location</p>
          <div className="flex justify-between gap-x-4">
            <input
              onChange={onLocationChange}
              value = {locationVal}
              placeholder="Enter your Location"
              className="w-full border-2  ml-[-5px] px-4 py-2 rounded-full border-gray-400"
            />

            <button onClick={currentLocationClkHnadler} className="w-[40px]">
              <img
                src="/images/locationIcon.png"
                className="w-full object-cover"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-between font-semibold">
          <p>Total Price</p>
          <p className="text-green-500 ">${ttlPrice}</p>
        </div>

        <div className="flex justify-between">
          <button className="px-2 py-2 hover:bg-yellow-600 rounded-[10px] bg-primary text-white" onClick={()=>{setShowCheckout(false); setShowMessage(true)}}>
            {" "}
            Place Order
          </button>
          <button onClick = {()=>setShowCheckout(false)} className="border-red-500 border-2 bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-[10px]">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
