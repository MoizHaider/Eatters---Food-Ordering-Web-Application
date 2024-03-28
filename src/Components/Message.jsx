import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';

const Message = ({ message, type, duration }) => {
  const [isVisible, setIsVisible] = useState(true);
  const messageRef = useRef(null);

  useEffect(() => {
    const messageElement = messageRef.current;

    const fadeInTimeline = gsap.timeline();
    fadeInTimeline.fromTo(
      messageElement,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

    const fadeOutTimeline = gsap.timeline();
    fadeOutTimeline.to(messageElement, { opacity: 0, duration: duration, delay: 0.5});

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  let style;
  if(type === "error"){
    style = "bg-red-300 border-2 border-red-500 text-white"
  }
  else if(type === "success"){
    style = "bg-green-500 border-2 border-green-500 text-white"
  }


  return (
    <div
    ref = {messageRef}
      className={`${style} absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2 z-50 ${isVisible ? 'block' : 'hidden'}`}
    >
      {message}
    </div>
  );
};



export default Message;
