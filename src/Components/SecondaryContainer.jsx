import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    if(!movies) return;
    return (
        <div className='bg-black  text-white'>

            <div className='-mt-40 relative z-30'>
                <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies = {movies.trendingMovies} />
                <MovieList title={"Popular"} movies = {movies.popularMovies} />
                <MovieList title={"Top Rated"} movies = {movies.nowPlayingMovies} />
            </div>
           
        </div>
    )
}

export default SecondaryContainer
