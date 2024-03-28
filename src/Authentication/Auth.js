import React from "react";
import Login from "./LogIn";
import Signup from "./SingUp";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Auth() {
  const [renderLogin, setRenderLogin] = useState(true);
  const loginRef = useRef(null);
  const signupRef = useRef(null);
  const containerRef = useRef()

  // const switchComponent = (val) => {
  //   if (renderLogin) {
  //     gsap.to(loginRef.current, { duration: 0.5, y: -100, opacity: 0 });
  //     gsap.to(signupRef.current, { duration: 0.5, y: 0, opacity: 1 });
  //   } else {
  //     gsap.to(loginRef.current, { duration: 0.5, y: 0, opacity: 1 });
  //     gsap.to(signupRef.current, { duration: 0.5, y: 100, opacity: 0 });
  //   }
  //   setRenderLogin(!renderLogin);
  // };

  function swapComponent(val) {
    if (!val) {
      gsap.to(loginRef.current, {
        duration: 0,
        // y: -100,
        opacity: 0,
        display: "none",
      });
      gsap.fromTo(
        signupRef.current,
        { y: -100 },
        {
          duration: 0.5,
          y: 0,
          opacity: 1,
          display: "block",
          ease: "power1.inOut"
        }
      );
      gsap.fromTo(
        containerRef.current,
        { y: -100 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          display: "flex",
          ease: "power1.inOut"
        }
      );
    } else {
      gsap.fromTo(
        loginRef.current,
        { y: 100 },
        {
          duration: 0.5,
          y: 0,
          opacity: 1,
          display: "block",
          ease: "power1.inOut"
        }
      );
      gsap.fromTo(
        containerRef.current,
        { y: 100 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          display: "flex",
          ease: "power1.inOut"
        }
      );
      gsap.to(signupRef.current, {
        duration: 0,
        // y: 100,
        opacity: 0,
        display: "none",
      });
      setRenderLogin(val);
    }
  }

  return (
    <div className="bg-primary lg:w-full bg-opacity-80 lg:bg-gray-100 flex xs:px-8  lg:px-0 justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block bg-primary bg-opacity-80">
        <img
          src="/images/logo.png"
          alt="Placeholder Image"
          className="object-cover w-full h-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
        />
      </div>
      <span ref = {containerRef} className="flex flex-col justify-center lg:p-20 lg:h-screen  max-w-[500px] lg:max-w-[50%] sm:20 bg-white xs:rounded-[30px] lg:rounded-[0px] shadow-xl lg:shadow-none p-6 sm:p-8 w-full lg:w-full lg:w-1/2">
        <Login
          loginRef={loginRef}
          renderLogin={renderLogin}
          swapComponent={swapComponent}
        />

        <Signup
          signupRef={signupRef}
          renderLogin={renderLogin}
          swapComponent={swapComponent}
          setRenderLogin = {setRenderLogin}
        />
      </span>
    </div>
  );
}
