import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import { useSelector } from 'react-redux';
import GptSearch from "./GptSearch";



const Browse  = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();

  const showGptSearch = useSelector(store => store.gpt.gptState);
  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GptSearch/> : (
          <>
           <MainContainer/>
          <SecondaryContainer/>
      </>
        )
      }
     
    </div>
  )
}

export default Browse;
