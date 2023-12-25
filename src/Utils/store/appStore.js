import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


const appStore = configureStore({
    // here we write configuration for slices
    reducer: {
        user: userSlice,
    }

})

export default appStore;