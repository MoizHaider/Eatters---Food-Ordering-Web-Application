import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { logOutStatus } from "../Store/ProfileSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Authentication/firebase";

export default function ProtectedRoute(props) {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  });

  if (props.loggedIn) {
    return <Outlet></Outlet>;
  }
  return <div>Sorry you are Not Authe</div>;
}
