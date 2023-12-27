import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({posterURL, title, id}) => {

  if(!posterURL || posterURL.endsWith('null')) return null;

  return (
    <div className=' w-44 selection: m-2 cursor-pointer transition-transform hover:scale-[1.2]'>
      <img src={posterURL} alt="movie-poster" className=' rounded-sm ' />
      <h2 className='text-md py-2'>{title}</h2>
    </div>
  )
}

export default MovieCard
