import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllOrders from "./Components/Orders/AllOrders";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import { isLoggedIn, loginStatus } from "./Store/ProfileSlice";
import { auth } from "./Authentication/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Outlet } from "react-router";
import Auth from "./Authentication/Auth";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { setProfileData } from "./Store/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (change) => {
      const user = auth.currentUser;
      
      dispatch(setProfileData(user.email));

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
  return (
    <>
      {loggedIn === true && pathname != "/auth" ? <Nav /> : null}
      <Routes>
        <Route path="/auth" element={<Auth></Auth>} />

        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/orders/*" element={<AllOrders></AllOrders>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </>
  );
}
export default App;
