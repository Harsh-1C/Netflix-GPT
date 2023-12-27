import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[13%] px-24  absolute text-white bg-gradient-to-r from-black '>
      <h2 className=' text-6xl font-bold w-[50%] '>{title}</h2>
      <p className=' text-lg w-1/4 py-6 px-2  '>{overview}</p>
      <button className='bg-white text-black px-12 rounded-md p-3 text-xl hover:opacity-80'> ▶️ Play</button>
      <button className='mx-2 bg-gray-500 text-white px-12 rounded-md p-3 text-xl opacity-70 hover:opacity-90'> 🔎  More Info</button>
    </div>
  )
}

export default VideoTitle
