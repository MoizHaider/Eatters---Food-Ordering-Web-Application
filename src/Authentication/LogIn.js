import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { login } from "../Store/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LogIn({ loginRef, renderLogin, swapComponent }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  async function formSubmitHandler(event) {
    event.preventDefault();
    console.log("login running");
    const result = await dispatch(
      login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );

    
    emailRef.current.value = "";
    passwordRef.current.value = "";
    if (result.error) {
      setErr(true);
      setErrMsg(result.error.message);
    } else {
      navigate("/", { replace: true });
    }
  }
  return (
    <div ref={loginRef}
    className={`${renderLogin ? "block" : "hidden"} `}>
      {" "}
      <form
        onSubmit={formSubmitHandler}
        
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
        {err && <p className="text-red-500 font-semibold">{errMsg}</p>}
        <button
          type="submit"
          className="bg-primary hover:bg-yellow-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Login
        </button>
      </form>
      <div className="mt-6 text-blue-500 text-center">
        <button
          className="hover:underline"
          onClick={() => swapComponent(false)}
        >
          Sign up Here
        </button>
      </div>
    </div>
  );
}
export default LogIn;
