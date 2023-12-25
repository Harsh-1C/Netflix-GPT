import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies : null,
        trailerKey: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload; 
        },
        addTrailerKey: (state, action) => {
            state.trailerKey = action.payload;
        }
    }
})


export const {addNowPlayingMovies, addTrailerKey} = movieSlice.actions;
export default movieSlice.reducer;