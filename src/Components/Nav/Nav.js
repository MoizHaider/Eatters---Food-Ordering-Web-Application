import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../Authentication/firebase";
import { LogOut } from "../../Store/ProfileSlice";
import Notification from "../../Assets/NotificationIcon.png";

function Nav() {
  const dispatch = useDispatch();
  function onLogoutClickHandler() {
    signOut(auth);
    dispatch(LogOut());
  }

  return (
    <div className="">
      <div className="w-full bg-white sticky top-0 shadow-xl flex items-center overflow-hidden z-40 ">
        <nav className="w-full flex h-[70px]  overflow-hidden items-center justify-around sm:justify-between  px-4 md:px-8 text-sm md:text-md lg:text-lg">
          <div className="hidden xs:block w-[80px] h-[80px] translate-x-[-10px] lg:w-[100px] lg:h-[100px]">
            <img src={"./images/logo.png"} className=" w-full object-cover" />
          </div>

          <ul className="flex gap-x-4 items-center">
            <Link to="/">Home</Link>
            <Link to="/orders">Cart</Link>
            <Link to="/profile">Profile</Link>
            <Link to="notifications">
              <img
                src={Notification}
                alt="Notify"
                className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
              />
            </Link>
            <button className="border-2 border-red-500 bg-red-500 bg-opacity-50 text-white rounded-full px-3 py-1 text-center" onClick={onLogoutClickHandler}>Log out</button>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default React.memo(Nav);
