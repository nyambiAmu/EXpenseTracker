import {  createSlice } from "@reduxjs/toolkit";
import { collection,addDoc } from "firebase/firestore";
import { db } from '../config/firebase'

export const firestoreReducer= createSlice({
name:"db",
initialState:[{
  
    transcationItem:"",
    amount:"", 
    transcationType:""
}],
reducers :{
addTransaction:async(state,action)=>{

    try{

    
        const docRef = await addDoc(collection(db, "transactions"), action.payload);

        alert('Added successfully');
    }catch(error){}


},


},


});
export const {addTransaction} = firestoreReducer.actions;
export default firestoreReducer.reducer
