import { useSelector } from "react-redux";
import useTrailerKey from "../hooks/useTrailerKey"


const VideoBackground = ({movieId}) => {
    
    useTrailerKey(movieId);
    const trailerKey = useSelector(store => store.movies?.trailerKey);

    if(!trailerKey) return;

    return (
        <div className="w-screen absolute -z-10 -top-36 ">
            <iframe className="w-screen aspect-video pointer-events-none bg-cover"  src={"https://www.youtube.com/embed/"+trailerKey+"?&autoplay=1&mute=1"}    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default VideoBackground
