import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({posterURL, title, id}) => {


  return (
    <div className='w-40 m-2 cursor-pointer transition-transform hover:scale-[1.2]'>
      <img src={posterURL} alt="movie-poster" className=' rounded-sm ' />
      <h2 className='text-sm py-2'>{title}</h2>
    </div>
  )
}

export default MovieCard
