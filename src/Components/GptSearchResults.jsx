import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSearchResults = () => {

  const {getMovieResults, getMovieName} = useSelector(store => store.gpt) ;
  if(!getMovieName) return null;
 
  return (
    <div className='bg-black p-4 m-10 m text-white opacity-90 '>
      {getMovieResults.map((movies, index) => <MovieList key={getMovieName[index]} title={getMovieName[index]} movies={movies} />)}
    </div>
  )
}

export default GptSearchResults
