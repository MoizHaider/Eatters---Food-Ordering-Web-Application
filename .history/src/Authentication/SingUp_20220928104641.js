import {Link} from "react-router-dom";
import { useRef } from "react";
import {auth} from "../Authentication/firebase"
import { useState } from "react";
import axios from "axios";
function SingUp(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const cnfrmPasswordRef = useRef();
    [error, setError] = useState("");
    function onSubmitHandler(event){
        axios.post("auth-dev-aea85.appspot.com","hello world")
        event.preventDefault();
        if(passwordRef.current.value !== cnfrmPasswordRef.current.value){
            return setError("Passwords do't match");
        }
        auth.creteUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
        emailRef.current.value = "";
        passwordRef.current.value = "";
        cnfrmPasswordRef.current.value = "";

    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email"  ref = {emailRef}/>
                <label>Possword</label>
                <input type="password" ref={passwordRef} />
                <label>Confirm Password</label>
                <input type="password" ref = {cnfrmPasswordRef} />
                <button >Sing Up</button>
            </form>
            <p>Already singup click </p>
            <Link to="/login">Login</Link>
        </div>
    );
}
export default SingUp;