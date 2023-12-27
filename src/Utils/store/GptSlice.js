import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState:{
        gptState : false,
        getMovieResults: null,
        getMovieName: null,
    },
    reducers:{
        toggleGptState : (state) => {
            state.gptState = !state.gptState;
        },
        addGptMovies : (state, action) => {
            const {movieName,movieResults } = action.payload;
            state.getMovieName = movieName;
            state.getMovieResults = movieResults;
        }
    }
})


export const {toggleGptState, addGptMovies} = GptSlice.actions;
export default GptSlice.reducer;
