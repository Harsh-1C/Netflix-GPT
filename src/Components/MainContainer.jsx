import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {


    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const primaryMovie = movies.results[8];
    const {title, overview, id} = primaryMovie;

  return (
    <div>
     <VideoTitle title = {title} overview = {overview}/>
     <VideoBackground movieId ={id}/>
    </div>
  )
}

export default MainContainer
