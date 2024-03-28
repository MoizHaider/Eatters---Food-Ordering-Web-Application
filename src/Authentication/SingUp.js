import { Link } from "react-router-dom";
import { useRef } from "react";
import { auth } from "../Authentication/firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { singup } from "../Store/ProfileSlice";

function SingUp({
  signupRef,
  renderLogin,
  swapComponent,
}) {
  const firstNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cnfrmPasswordRef = useRef();
 
  let [error, setError] = useState("");
  const dispatch = useDispatch();

  function onSubmitHandler(event) {

    event.preventDefault();
    console.log("ref val ", emailRef.current.value)
    if (passwordRef.current.value !== cnfrmPasswordRef.current.value) {
      return setError("Passwords do't match");
    }
    dispatch(
      singup({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
    emailRef.current.value = "";
    passwordRef.current.value = "";
    cnfrmPasswordRef.current.value = "";
  }
  return (
    <form
      onSubmit={onSubmitHandler}
      className={`${renderLogin ? "hidden" : "block"}`}
      ref={signupRef}
    >
      <h1 className="text-2xl font-semibold mb-4">Signup</h1>
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
          placeholder="Minimum 6 characters"
        />
      </div>
      <div className="mb-4">
        <label for="password" className="block text-gray-600">
          Confirm Password
        </label>
        <input
          ref={cnfrmPasswordRef}
          type="password"
          id="password"
          name="confirmPassword"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
          autocomplete="off"
          placeholder="Minimum 6 characters"
        />
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-yellow-600 text-white font-semibold rounded-md py-2 px-4 w-full"
      >
        Signup
      </button>
      <div className="mt-6 text-blue-500 text-center">
        <button onClick={() => swapComponent(true)} className="hover:underline">
          Login Here
        </button>
      </div>
    </form>
  );
}
export default SingUp;
