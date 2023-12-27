import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState:{
        gptState : false,
    },
    reducers:{
        toggleGptState : (state, action) => {
            state.gptState = !state.gptState;
        }
    }
})


export const {toggleGptState} = GptSlice.actions;
export default GptSlice.reducer;
