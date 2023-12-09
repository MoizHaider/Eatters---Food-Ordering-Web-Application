import Home from "../Home/Home";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Notification from "../../Assets/NotificationIcon.png";
import LogIn from "../../Authentication/LogIn";
import { useEffect, useState } from "react";
import React from "react";
import SingUp from "../../Authentication/SingUp";
import AllOrders from "../Orders/AllOrders";
import Map from "../Trace Order/Map";
import ProtectedRoute from "../../Authentication/ProtectedRoute";
import Profile from "../Profile/Profile";
import { isLoggedIn, loginStatus } from "../../Store/ProfileSlice";
import { auth } from "../../Authentication/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Outlet } from "react-router";
import Checkout from "../Orders/Checkout";
import classes from "./Nav.module.css"

function Nav() {
  // let logStatus = useSelector(loginStatus);
  // let dispatch = useDispatch();
  let [searchModel, setSearchModel] = useState(false);
  let [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (change) => {
      const user = auth.currentUser;
      if (user != null) console.log(user);
      console.log(
        `Created User Time Dif 
          ${
            new Date(user.metadata.creationTime).getTime() -
            new Date().getTime()
          }`
      );

      if (
        user != null &&
        new Date().getTime() - new Date(user.metadata.creationTime).getTime() >
          1
      ) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, [loggedIn]);

  function onSearchClickHandler() {
    setSearchModel(true);
  }
  function searchBackBtnClickHandler() {
    setSearchModel(false);
  }

  return (
    <div className = {classes.nav}>
      <div className = {classes.navItems}>
        
        <nav>
          <ul className= {classes.navSections}>
            <Link to="/home">Home</Link>
            <Link to="/messeges">Messeges</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/traceOrders">Trace Order</Link>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<SingUp></SingUp>} />
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route
            path="/home"
            element={
              <Home
                searchModel={searchModel}
                onSearchClickHandler={onSearchClickHandler}
                searchBackBtnClickHandler={searchBackBtnClickHandler}
              ></Home>
            }
          />
          <Route path="/orders/*" element={<AllOrders></AllOrders>}>//try to make some logic to remove the start and still get the same functionality
            <Route path="checkout" element = {<Checkout/>}>
            </Route>
          </Route>

          <Route path="/traceOrders" element={<Map />} />
          <Route path = "/checkoutMap" element={<Map/>}/>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default React.memo(Nav);
