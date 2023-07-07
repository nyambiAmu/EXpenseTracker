import { useState } from "react";
//import {auth} from '../config/firebase';
//import { sendPasswordResetEmail } from "firebase/auth";
import { passwordReset } from "../authReducer/auth";
import{useDispatch} from "react-redux";

function ResetPassword(){
    


    const dispatch= useDispatch();
    
    const [email, setPassword] = useState('');

    const forgotPassword = () => {
        dispatch(passwordReset(email))
    };
    return(
        <div className="container">
            <h4>Reset your password</h4>

            <input type="text" placeholder="Enter email" 
            onChange={(event)=>setPassword(event.target.value)}/><br></br>

            <button onClick={forgotPassword}>Reset password</button>
        </div>
    );
}
export default ResetPassword;