import React from 'react'
import { Link } from 'react-router-dom';
import { Breathing, Image, Shimmer } from 'react-shimmer'

const MovieCard = ({posterURL, title, id}) => {

  if(!posterURL || posterURL.endsWith('null')) return null;

  return (
    <Link to={`/browse/${id}`}>
    <div className=' overflow-hidden w-44  m-2 cursor-pointer transition-transform hover:scale-[1.2]'>
      <Image src={posterURL} className='rounded-sm' fallback={<Breathing width={175} height={270} />} />
      <h2 className='text-md py-2'>{title}</h2>
      </div>
    </Link>
  )
}

export default MovieCard
