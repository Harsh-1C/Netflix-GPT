import { useSelector } from "react-redux";
import useTrailerKey from "../hooks/useTrailerKey"


const VideoBackground = ({movieId}) => {
    
    useTrailerKey(movieId);
    const trailerKey = useSelector(store => store.movies?.trailerKey);

    if(!trailerKey) return;

    return (
        <div className="w-screen  ">
            <iframe className="w-[100%] aspect-video pointer-events-none bg-cover"  src={"https://www.youtube.com/embed/"+trailerKey+"?&autoplay=1&mute=1&loop=1"}    allow="autoplay; loop;" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground;
