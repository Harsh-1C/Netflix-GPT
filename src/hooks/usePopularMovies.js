import { useDispatch, useSelector } from "react-redux";
import { GET_API_OPTIONS } from "../Utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../Utils/store/movieSlice";

const usePopularMovies = () => {
// fetching all the movies and updating the store

    const popularMovies = useSelector(store => store.movie?.popularMovies);


    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', GET_API_OPTIONS)
        const json = await data.json(); 
        dispatch(addPopularMovies(json));
    }

    useEffect(()=>{
        if(!popularMovies)
            getPopularMovies();
    },[]);
}

export default usePopularMovies;