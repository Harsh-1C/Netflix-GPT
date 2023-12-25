import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";


const appStore = configureStore({
    // here we write configuration for slices
    reducer: {
        user: userReducer,
        movies: movieReducer,
    }

})

export default appStore; 