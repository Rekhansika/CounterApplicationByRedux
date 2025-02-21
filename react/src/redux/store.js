import {configureStore} from "@reduxjs/toolkit"
import reducer from "./counterSlice";

const store = configureStore({
    reducer:{
        reducer

    }
})

export default store;