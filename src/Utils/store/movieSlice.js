import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies : null,
        trailerKey: null,
        popularMovies: null,
        trendingMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload; 
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload; 
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrailerKey: (state, action) => {
            state.trailerKey = action.payload;
        }
    }
})


export const {addNowPlayingMovies, addTrailerKey, addPopularMovies, addTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer;