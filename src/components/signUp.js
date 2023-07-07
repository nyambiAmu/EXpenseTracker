/* eslint-disable no-unused-vars */
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth' ;

 
import {auth} from '../config/firebase';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../authReducer/auth';

function SignUp () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch= useDispatch();

    

    return (
        <div className='container'>
            <h1>SignUp Page</h1>

            <input type="text" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}/><br></br>

            <input type="passoword" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} /><br></br><br></br>

            <button onClick={()=>dispatch(signUp(email,password))}>Sign up</button>

        </div>
    )
}
export default SignUp