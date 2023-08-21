"use client"
import { configureStore } from "@reduxjs/toolkit";
import connectWalletReducer from "./feature/connect-wallet-slice"


export const store = configureStore({
    reducer: {
        connectWalletReducer
    }
});
