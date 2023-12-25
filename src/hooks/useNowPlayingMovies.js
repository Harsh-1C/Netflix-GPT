import { useDispatch } from "react-redux";
import { GET_API_OPTIONS } from "../Utils/constant";
import { addNowPlayingMovies } from "../Utils/store/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

    // fetching all the movies and updating the store

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', GET_API_OPTIONS);
      const json = await data.json(); 
      dispatch(addNowPlayingMovies(json));

    }
    
    useEffect(()=>{
      getNowPlayingMovies();
    },[]);
}


export default useNowPlayingMovies;