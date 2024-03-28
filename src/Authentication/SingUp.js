import { Link } from "react-router-dom";
import { useRef } from "react";
import { auth } from "../Authentication/firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { singup } from "../Store/ProfileSlice";

function SingUp({ signupRef, renderLogin, swapComponent, setRenderLogin }) {
  const firstNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cnfrmPasswordRef = useRef();

  const dispatch = useDispatch();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  async function onSubmitHandler(event) {
    console.log("signup running");
    event.preventDefault();
    if (passwordRef.current.value !== cnfrmPasswordRef.current.value) {
      setErrMsg("Passwords don't match");
      return; // Add this line to prevent further execution
    }
    const result = await dispatch(
      singup({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
    emailRef.current.value = "";
    passwordRef.current.value = "";
    cnfrmPasswordRef.current.value = "";

    if (result.error) {
      setErr(true);
      setErrMsg(result.error.message);
    } else {
      setRenderLogin(true);
    }
  }
  return (
    <div className={`${renderLogin ? "hidden" : "block"}`} ref={signupRef}>
      {" "}
      <form onSubmit={onSubmitHandler}>
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
        {err && <p className="text-red-500 font-semibold mb-4">{errMsg}</p>}
        <button
          type="submit"
          className="bg-primary hover:bg-yellow-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Signup
        </button>
      </form>
      <div className="mt-6 text-blue-500 text-center">
        <button onClick={() => swapComponent(true)} className="hover:underline">
          Login Here
        </button>
      </div>
    </div>
  );
}
export default SingUp;
