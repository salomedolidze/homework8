import {configureStore } from "@reduxjs/toolkit";
import {getuserreducer} from './slice/getUerSlice.js'

export const store = configureStore({
    reducer:{
        todos: getuserreducer
    }
})
