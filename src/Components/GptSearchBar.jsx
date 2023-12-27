import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from "../Utils/langConstant";
import openai from '../Utils/openai';
import { GET_API_OPTIONS } from '../Utils/constant';
import { addGptMovies } from '../Utils/store/GptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector(store => store.appConfig.currentLang);
  const searchInput = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchMovieDetails = async (movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", GET_API_OPTIONS)
    const json = await data.json();
    return json.results;

  }

  const handleGptSearchClick = async () => {
    const searchText = searchInput.current.value;
    // TODO: make an api call to gpt to get the movie results

    const gptQuery = "Act as a movie reccomendation system and suggest some movie for the query "+searchText+ ". Only give me names of top 5 movie, commas seperated like the example result given ahead. Example Results: 3idiot, gadar, chupke chupke, don, sholay "


      try {
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });

        const movieName =  gptResults.choices[0].message.content.split(", ")

        const promiseArray  = movieName.map((movie) => fetchMovieDetails(movie))
      
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovies({movieName: movieName, movieResults:tmdbResults, }));
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage(error.message);
        return;
      }
 
  }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='bg-black w-1/2 rounded-md grid grid-cols-12 ' onSubmit={(e) => e.preventDefault()}>

        <input ref={searchInput} className=' p-4 m-4 col-span-9 rounded-md ' placeholder={lang[currentLang].placeHolder}/>
        <button className='bg-red-600  px-4 py-2 m-4 text-white rounded-md col-span-3 hover:bg-red-800 transition-all' onClick={handleGptSearchClick} >{lang[currentLang].search}</button>
        {
          errorMessage !== null && <p className='text-red-700 col-span-12 px-4 font-bold'  >{errorMessage}</p>
        }
      </form>
    </div>
  )
}

export default GptSearchBar
