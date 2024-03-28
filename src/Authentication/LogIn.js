import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { login } from "../Store/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LogIn({
  loginRef,
  renderLogin,
  swapComponent,
}) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();
    dispatch(
      login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }
  return (
    <form
      onSubmit={formSubmitHandler}
      ref={loginRef}
      className={`${renderLogin ? "block" : "hidden"} `}
    >
      <h1 className="text-2xl font-semibold mb-4 ">Login</h1>
      <div className="mb-4">
        <label for="username" className="block text-gray-600">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          id="username"
          name="username"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
          autocomplete="off"
        />
      </div>

      <div className="mb-4">
        <label for="password" className="block text-gray-600">
          Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
          autocomplete="off"
        />
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          className="text-blue-500"
        />
        <label for="remember" className="text-gray-600 ml-2">
          Remember Me
        </label>
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-yellow-600 text-white font-semibold rounded-md py-2 px-4 w-full"
      >
        Login
      </button>
      <div className="mt-6 text-blue-500 text-center">
        <button className="hover:underline" onClick={() => swapComponent(false)}>
          Sign up Here
        </button>
      </div>
    </form>
  );
}
export default LogIn;
