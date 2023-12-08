import {Link} from "react-router-dom";
import { useRef } from "react";
import {auth} from "../Authentication/firebase"
import { useState } from "react";

function SingUp(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const cnfrmPasswordRef = useRef();
    let [error, setError] = useState("");
    function onSubmitHandler(event){
        
        event.preventDefault();
        if(passwordRef.current.value !== cnfrmPasswordRef.current.value){
            return setError("Passwords do't match");
        }
        
        emailRef.current.value = "";
        passwordRef.current.value = "";
        cnfrmPasswordRef.current.value = "";
    }
    return (
        <div>
            <h3>{error}</h3>
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