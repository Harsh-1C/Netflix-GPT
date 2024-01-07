import React from 'react'

const Loader = ({prop}) => {
  return (
    <div className="flex justify-center items-center">
      <div className= {`border-t-4 ${prop} border-solid rounded-full animate-spin`}></div>
    </div>
  )
}

export default Loader;
