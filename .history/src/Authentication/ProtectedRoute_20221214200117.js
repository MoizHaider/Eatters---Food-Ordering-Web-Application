import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { logOutStatus } from "../Store/ProfileSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";


export default function ProtectedRoute(props) {
  const navigate = useNavigate();
  
  useEffect(() => {
    onAuthStateChanged(auth, user=>{
      
    });
    
  }, [logOut]);
  if (props.loggedIn) {
    return <Outlet></Outlet>;
  }
  return <div>Tu mera ptar Chuti kr! ja authenticate ho kr a!</div>;
}
