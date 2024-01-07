import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchResults from './GptSearchResults';
import { BG_URL } from '../Utils/constant';


const GptSearch = () => {


  return (
    <div>
      <div className= "  -z-30 fixed">
        <img src={BG_URL} alt='bg' />
      </div>
      <GptSearchBar />
      <GptSearchResults />
    </div>
  )
}

export default GptSearch;
