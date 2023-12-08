import {Link} from "react-router-dom";
import { useRef } from "react";
import {login} from "../Store/ProfileSlice";
import { useDispatch } from "react-redux";
import { loginStatus } from "../Store/ProfileSlice";
function LogIn(){
    const loggedStatus = useSe
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    function formSubmitHandler(event){
        event.preventDefault();
        dispatch(login({email: emailRef.current.value, password: passwordRef.current.value}));
        emailRef.current.value = "";
        passwordRef.current.value = "";
        
    }
    return (
    <div>
        <form onSubmit={formSubmitHandler}>
            <label>Email</label>
            <input type="email" ref={emailRef} />
            <label>Possword</label>
            <input type="password" ref={passwordRef} />
            <button >LogIn</button>
        </form>
        <p>Do't have an account </p>
        <Link to="/">SingUp</Link>
    </div>);
}
export default LogIn;