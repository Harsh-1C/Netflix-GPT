import React from 'react'
import { useSelector } from 'react-redux'

const GptSearchResults = () => {

  const {getMovieResults, getMovieName} = useSelector(store => store.gpt) ;
  if(!getMovieName) return null;
  return (
    <div>
      
    </div>
  )
}

export default GptSearchResults
