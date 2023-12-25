import { useDispatch } from "react-redux";
import { GET_API_OPTIONS } from "../Utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../Utils/store/movieSlice";

const usePopularMovies = () => {
// fetching all the movies and updating the store

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', GET_API_OPTIONS)
        const json = await data.json(); 
        dispatch(addPopularMovies(json));
    }

    useEffect(()=>{
        getPopularMovies();
    },[]);
}

export default usePopularMovies;