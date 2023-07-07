import { configureStore } from "@reduxjs/toolkit";
import {authSlice }from "../authReducer/auth";
import firestoreSlice from "../fireStoreReducers/firestore";

import dataSlice from '../fireStoreReducers/data'

export const store = configureStore({
    reducer: {
        authentication: authSlice,
        firestore:firestoreSlice,
        data:dataSlice
    }
})