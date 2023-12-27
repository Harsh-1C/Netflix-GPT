import { useDispatch, useSelector } from "react-redux";
import { GET_API_OPTIONS } from "../Utils/constant";
import { addTrendingMovies } from "../Utils/store/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {

    // fetching all the movies and updating the store

    const dispatch = useDispatch();
    const trendingMovies = useSelector(store => store.movies?.trendingMovies);
    const getTrendingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', GET_API_OPTIONS);
      const json = await data.json(); 
      dispatch(addTrendingMovies(json));

    }
    
    useEffect(()=>{
      if(!trendingMovies)
        getTrendingMovies();
    },[]);
}


export default useTrendingMovies;