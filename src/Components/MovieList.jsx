import React from 'react'
import MovieCard from './MovieCard'
import { IMG_CDN_URL } from '../Utils/constant';

const MovieList = ({title, movies}) => {
  
  if(movies && movies.results) movies = movies.results

  return(

    <div className='m-4 mx-16'>
        <h1 className='font-bold text-xl mx-2'>{title}</h1>
        <div className= 'flex overflow-auto'>
        
        <div className='flex'>
            {
               movies &&  movies.map(movie =>  <MovieCard id={movie?.id} key={movie?.id} posterURL = {IMG_CDN_URL+movie?.poster_path} title={movie?.original_title}/>)
            }
        </div>
       
    </div>
    </div>
  
  )
  
}

export default MovieList;
