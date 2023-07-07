import { createSlice } from "@reduxjs/toolkit";
import {
    //getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail

} from 'firebase/auth';
import { auth } from '../config/firebase';
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const authSlice = createSlice({

    name: "auth",
    inialState: {
        user: {

            email: " ",
            password: " "
        },

    },
    reducers: {
        signUp: (state, action) => {
            createUserWithEmailAndPassword(auth, action.payload, action.payload)
                .then(() => {
                    alert("Registered successfully");
                }).catch((error) => {
                    console.log(error.message);
                });

        },
        signIn: (state, action) => {

            signInWithEmailAndPassword(auth, action.payload, action.payload).then(() => {

                alert("Log in succefully");
            })

                .catch((error) => {
                    console.log(action.payload);
                    console.log(action.payload);
                    const errorMessage = error.message;
                    console.log(errorMessage);

                });

        },
        signingOut: () => {
            signOut(auth)
                .then(() => {
                    return true;

                })

                .catch((error) => {});
        },
        passwordReset: (state, action) => {

            sendPasswordResetEmail(auth, action.payload).then(() => {
                alert("Check your email")
            }).catch((error) => {

            });


        },



    }


});
export const { signUp, signIn, signingOut, passwordReset } = authSlice.actions;
export default authSlice.reducer;