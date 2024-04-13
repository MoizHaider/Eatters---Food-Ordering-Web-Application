import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import gsap, { random } from "gsap";
import { useGSAP } from "@gsap/react";

import React from "react";

function HomeTop(props) {
  const topContainer = useRef();
  useGSAP(
    () => {
      var tl = gsap.timeline();
      // gsap.fromTo("", {}, {})
      tl.fromTo(
        ".lineholder",
        { yPercent: -100 },
        { duration: 0.5, delay: 0.2, yPercent: 0 }
      ).fromTo(
        ".lineholder img",
        { yPercent: 100 },
        {
          duration: 0.5,
          yPercent: 0,
          onComplete() {
            gsap.to(".left-bur", { top: 6, duration: 0.5, scale: 1.1 });
            gsap.to(".right-bur", {
              top: 0,
              right: 3,
              duration: 0.5,
              scale: 1.1,
              onComplete(){
               

                gsap.to(".left-bur", { translateY : 15, duration: 0.8, repeat: -1, yoyo: true, ease: "Power0.easeInOut"})
                gsap.to(".right-bur", { translateY : 15, duration: 0.8, repeat: -1, yoyo: true, ease: "Power0.easeInOut"})
                gsap.to(".lineholder img", { translateY : 15, duration: 0.8, repeat: -1, yoyo: true, ease: "Power0.easeInOut"})
              }
            });
          },
        },
        "<"
      );
    },
    { scope: topContainer }
  );

  return (
    <div
      className="grid  grid-cols-1 md:flex md:flex-row justify-between w-[100vw] h-[92vh]"
      ref={topContainer}
      style={{background: "rgb(245,165,10)",
        background: "linear-gradient(127deg, rgba(245,165,10,1) 44%, rgba(255,255,255,1) 44%)"}}
    >
      {/* <img src = "/images/topbg2.png" className="w-[500px] h-[500px]"/> */}
      <div className="w-[40%] translate-y-[30px] xs:translate-y-[0px]  flex sm:gap-x-4 lg:gap-x-6 items-center px-2 xs:pl-4 lg:pl-8">
        <div className="h-fit w-[400px] md:w-[400px]  rotate-90 xl:mb-8">
          <div className="w-[200%] lg:w-[160%] translate-x-[-10px] sm:translate-x-[-15px] md:translate-x-[0px] flex gap-x-4">
            <div className="w-[5px] sm:w-[10px] bg-black "></div>
            <div className="h-fit">
              <p className="md:text-xl lg:text-2xl font-bold ">Welcome To </p>
              <p className="w-full text-start text-xs sm:text-sm lg:text-md">
                Eatters a Fast Food Chain
              </p>
              <p className="w-full text-start text-xs sm:text lg:text-md">Located in NewYork</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-12">
          <p className="font-bold text-[4rem]  xs:text-[6rem] sm:text-[8rem] md:text-[6rem] lg:text-[8rem] xl:text-[12rem] h-[90px] xs:h-[130px] md:h-[130px] sm:h-[160px] lg:h-[170px] xl:h-[250px] ">Eatters</p> {/*text-9xl lg:text-[14rem]  */}
          <p className=" text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900">Fast Food Chain</p>
        </div>
      </div>

      <div className="inline-flex justify-self-center xs:justify-self-end w-[300px] xs:w-[60%] sm:w-[60%] md:w-[50%] lg:w-[45%] h-[100vh] relative overflow-hidden translate-y-[-50px] xs:translate-y-[-100px] sm:translate-y-[-140px] md:translate-y-[0px]  lg:translate-y-[-50px] ">
        <div className=" object-contain overflow-hidden w-[500px] h-[500px]">
          <img
            src="/images/burgbg.png"
            className="w-full object-contain absolute top-8  "
          />
        </div>

        <div className="w-full object-contan ">
          {" "}
          <img
            src="/images/leftbur.png"
            className="left-bur object-cover absolute"
          />
          <div className="overflow-hidden object-contain w-[500px] h-[500px]">
            {" "}
            <div className="lineholder overflow-hidden object-cover absolute z-30">
              <img
                src="/images/leftline.png"
                alt="image"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full object-contain">
          {" "}
          <img
            src="/images/rightbur.png"
            className="right-bur object-cover top-8 right-5 absolute "
          />{" "}
          <div className="overflow-hidden object-contain w-[500px] h-[500px] ">
            <div className="lineholder overflow-hidden object-cover left-0 absolute z-30">
              <img
                src="/images/rightline.png"
                alt="image"
                className="w-full object-cover  block top-8  "
              />
            </div>
          </div>
          <div className="overflow-hidden  object-contain w-[500px] h-[500px]">
            {" "}
            <div className="lineholder overflow-hidden object-cover left-0 right-2 sm:right-3 z-10 top-2 absolute">
              <img
                src="/images/midline.png"
                alt="image"
                className="w-full object-cover  block "
              />
            </div>
          </div>
          {/*  top-8 right-4 */}
        </div>
      </div>
    </div>
  );
}
export default HomeTop;
