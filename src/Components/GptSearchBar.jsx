import React from 'react'
import { useSelector } from 'react-redux'

import lang from "../Utils/langConstant";

const GptSearchBar = () => {

  const currentLang = useSelector(store => store.appConfig.currentLang);

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='bg-black w-1/2 rounded-md grid grid-cols-12 '>

        <input className=' p-4 m-4 col-span-9 rounded-md ' placeholder={lang[currentLang].placeHolder}/>
        <button className='bg-red-600  px-4 py-2 mx-2 my-4 text-white rounded-md col-span-3 hover:bg-red-800 transition-all'>{lang[currentLang].search}</button>

      </form>
    </div>
  )
}

export default GptSearchBar
