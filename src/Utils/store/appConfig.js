import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
    name:"appConfig",
    initialState:{
        currentLang: "english",
    },
    reducers:{
        changeLanguage: (state,action) => {
            state.currentLang = action.payload;
        }
    }
})

export const {changeLanguage} = appConfig.actions;
export default appConfig.reducer;
