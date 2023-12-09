import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData} from "../../Store/ProfileSlice";
import {  LogOut } from "../../Store/ProfileSlice";
import { signOut } from "firebase/auth";
import {auth} from "../../Authentication/firebase";
import { Route } from "react-router";


export default function Profile() {
  const user = useSelector(userData);
  
  console.log(user);
  const dispatch = useDispatch();
  function onLogoutClickHandler() {
    signOut(auth);
    dispatch(LogOut());
  }

  return (
    <div>
      <div>
        Profile Pic
      </div>
      <div>Name {user.name}</div>
      <div>Email {user.email}</div>
      <div>Location {user.location}</div>
      <button>Change Password</button>
      <button>Help</button>
      <button onClick={onLogoutClickHandler}>Log out</button>
      <Route path = "hello" element = {<h1>Extended path</h1>}/>
    </div>
  );
}
