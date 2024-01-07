import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GET_API_OPTIONS, HD_IMG_CDN_URL } from '../Utils/constant';
import Header from './Header';
import { Breathing, Image } from 'react-shimmer';
import Loader from './Loader';

const MovieDetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);


    const fetchMovieDetails = async () => {
            fetch (`https://api.themoviedb.org/3/movie/${id}?language=en-US`, GET_API_OPTIONS)
            .then((response) => response.json())
            .then(data => {
                if(data.success===false){
                    setMovieData(null);
                }
                else{

                    setMovieData(data);
                }
                setLoading(false);
            }) ;
    }

    useEffect(()=>{
        fetchMovieDetails();
    },[])

  return (
    <div>
        <Header />
     
    {
        loading ? (<div className='w-screen bg-black h-screen flex justify-center items-center'>
            <Loader prop = {"w-36 h-36 border-red-600"}/>
        </div> ) : movieData  ? <>
            <section>
               <div className='fixed z-30 bg-gradient-to-r from-black w-screen h-[100vh] '></div>
               <img className=' fixed w-screen h-screen' src={HD_IMG_CDN_URL + movieData?.backdrop_path} alt="" />
            </section>
            <section className='absolute top-[20%] z-50 w-2/3  p-4 m-4 text-white bg-opacity-85  '>
               <div className='flex-col col-span-8'>
               <h2 className='   px-4 mb-2 font-extrabold text-8xl text-left'>{movieData?.title.split(":")[0]} </h2>
               <p className=' p-4 my-2 text-xl  '>{movieData?.overview}</p>
                <div className=' mx-4 my-2 flex flex-wrap space-x-3'>
               {
                   movieData?.genres?.map((genre) => <span className='px-2 py-1 bg-red-700 opacity-90 rounded-md font-bold'>{genre.name} ‧ </span>)
               }
                </div>
               </div>

            </section>
           </> : navigate("/error")
    }
  
    </div>
  )
}

export default MovieDetail;
