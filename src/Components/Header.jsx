import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, addUser } from '../Utils/store/userSlice';
import { LOGO_URL, USER_AVATAR } from '../Utils/constant';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // subscribing to the user
  const user = useSelector(appStore => appStore.user)  

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    });
  }


  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // After sign up or sign in
        const {uid, displayName, email} = user;
        dispatch(addUser({uid:uid, displayName: displayName, email: email}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => {
      unsubscribed();
    }
  }, [])

  return (
    <div className=' w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
      <img className= ' cursor-pointer w-44 ' src={LOGO_URL} alt='Logo' />
      {
        user && 
        (<div className='flex items-center '>
         
          <img className='w-12 h-12 my-auto' src={USER_AVATAR} alt="user-icon" />
          <div className=' flex-col text-white mx-1'>
          <h3 className='font-bol text-md'>Hi, {user.displayName}!</h3>
          <button onClick={handleSignOut} className='text-sm bg-red-600 px-1 my-auto hover:underline font-bold'>Sign Out</button>
          </div>
 
        </div>)
      }
     
    </div>
  )
}

export default Header
