import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, addUser } from '../Utils/store/userSlice';
import { LOGO_URL, USER_AVATAR } from '../Utils/constant';
import { addGptMovies, toggleGptState } from '../Utils/store/GptSlice';
import {SUPPORTED_LANG} from '../Utils/constant';
import { changeLanguage } from '../Utils/store/appConfig';
import { Link } from "react-router-dom";

const Header = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // subscribing to the user
  const user = useSelector(appStore => appStore.user)  
  const gpt = useSelector(store => store.gpt.gptState); 
  // console.log(user);
  

  const handleSignOut = () => {

    dispatch(addGptMovies({}));
    if(gpt.gptState) dispatch(toggleGptState());
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
    });
  }

  const showGpt = useSelector(store => store.gpt.gptState);

  const handltGptToggler = ()=>{
    dispatch(toggleGptState());
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

   useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // After sign up or sign in
        const {uid, displayName, email} = user;
        dispatch(addUser({uid:uid, displayName: displayName, email: email}));
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });

    return () => {
      unsubscribed();
    }
 }, [])

  return (
    
     <div className='fixed t-2 w-full z-50 px-8 py-2 bg-gradient-to-b from-black flex justify-between '>
      <Link to={"/"}> <img className= ' cursor-pointer w-44 ' src={LOGO_URL} alt='Logo' /> </Link>
      {
        user && 
        (
        <div className='flex items-center  '>
          {
            !id && showGpt && ( <select onChange={handleLanguageChange}  className='p-3 rounded-md bg-gray-900 text-white  font-bold'>

            {
              SUPPORTED_LANG.map(obj => <option key={obj.identifier} value={obj.identifier}>{obj.value}</option>)
            }
            </select>)
          }

          {
            !id &&  <button onClick={handltGptToggler} className='bg-purple-800 text-white m-4 py-2 px-6 rounded-md font-bold hover:underline hover:bg-purple-700 transition-all  '>{showGpt ? "Browse" :"GPT Search"}</button>
          }
         
        
         
          <img className='w-12 h-12 my-auto' src={USER_AVATAR} alt="user-icon" />
          <div className=' flex-col text-white mx-1'>
          <h3 className='font-bol text-md'>Hi, {user.displayName}!</h3>
          <button onClick={handleSignOut} className='text-sm bg-red-600 px-1 my-auto hover:underline font-bold rounded-md'>Sign Out</button>
          </div>
 
        </div>)
      }

      
     
    </div>
  )
}

export default Header
