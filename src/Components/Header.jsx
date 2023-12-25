import { signOut } from 'firebase/auth';
import React from 'react'
import { app, auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../Utils/store/userSlice';
import appStore from '../Utils/store/appStore';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // subscribing to the user
  const user = useSelector(appStore => appStore.user)  

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");

    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className=' w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
      <img className= ' cursor-pointer w-44 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo' />
      {
        user && 
        (<div className='flex items-center '>
         
          <img className='w-12 h-12 my-auto' src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe?format=jpg&name=small" alt="user-icon" />
          <div className=' flex-col text-white mx-1'>
          <h3 className='font-bol text-md'>Hi {user.displayName}</h3>
          <button onClick={handleSignOut} className='text-sm bg-red-600 px-1 my-auto hover:underline font-bold'>Sign Out</button>
          </div>
 
        </div>)
      }
     
    </div>
  )
}

export default Header
