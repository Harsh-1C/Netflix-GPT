import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./GptSlice";
import appConfigReducer from "./appConfig"


const appStore = configureStore({
    // here we write configuration for slices
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        appConfig: appConfigReducer,
    }

})

export default appStore; 