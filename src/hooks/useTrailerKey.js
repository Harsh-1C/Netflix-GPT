import { useDispatch } from "react-redux";
import { addTrailerKey } from "../Utils/store/movieSlice";
import { useEffect } from "react";
import { GET_API_OPTIONS } from "../Utils/constant";

const useTrailerKey = (movieId) => {
    // It fetched the movie clip and store the key to the store
    const dispatch = useDispatch();

    const fetchVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', GET_API_OPTIONS)
        const json = await data.json();

        const filteredData = json.results.filter((list) => {
            return list.type === "Trailer";
        })

        const trailerKey = filteredData? filteredData[0]?.key: json.results[0].key;
        dispatch(addTrailerKey(trailerKey));
    }

    useEffect(()=>{
        fetchVideos()
    },[])

}

export default useTrailerKey;