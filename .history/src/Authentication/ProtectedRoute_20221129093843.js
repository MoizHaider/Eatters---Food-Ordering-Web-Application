import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { logOutStatus } from "../Store/ProfileSlice";
import { useEffect } from "react";

export default function ProtectedRoute(props) {
  const navigate = useNavigate();
  const logOut = useSelector(logOutStatus);
  useEffect(() => {
    if (logOut === true) {
      setTimeout(()=>{
        navigate("/login",{});
      },5000)
    }
  }, [logOut]);
  if (props.loggedIn) {
    return <Outlet></Outlet>;
  }
  return <div>Tu mera ptar Chuti kr! ja authenticate ho kr a!</div>;
}
