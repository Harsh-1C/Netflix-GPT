import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidation} from "../Utils/validate"
import { auth } from "../Utils/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/store/userSlice'
import { BG_URL } from '../Utils/constant'
import Loader from './Loader'

const Login = () => {
  // Hooks
  const dispatch = useDispatch();

  // State Variables
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);

  // references for values of input fields
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleHandler = ()=> {
    setIsSignIn(!isSignIn)
  }

  const submitHandler = () => {
    const message = checkValidation(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message!==null) return;

    // Signup sigin logic goes here...
    if(!isSignIn){
      // Sign up logic
      setLoading(true);
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          setLoading(false);
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
          }).then(() => {
            // Profile updated!
            const {uid, displayName, email} = auth.currentUser;
            dispatch(addUser({uid:uid, displayName: displayName, email: email}));
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(`${errorCode} - ${errorMessage}`); 
          });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
    else{
      // sign in
      setLoading(true);
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} - ${errorMessage}`); 
      });
    }
  }

  return (
    <div>
      <Header/>
      <div className= " absolute ">
        <img src={BG_URL} alt='bg' />
      </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-black w-3/12 absolute my-36 mx-auto left-0 right-0 text-white bg-opacity-80 p-10 rounded-lg ">

        

          <h1 className=' font-bold text-3xl py-4 '>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {
            !isSignIn && ( <input ref={fullName} type='text' placeholder='Enter your full name' className=' w-full p-4 my-4 bg-gray-500 rounded-sm'/>)
          }
          
         
          <input ref={email} type='email' placeholder='Enter your email' className=' w-full p-4 my-4 bg-gray-500 rounded-sm'/>

          <input ref={password} type='password' placeholder='Enter your password' className=' w-full p-4 my-4 bg-gray-500 rounded-sm  ' />

          {
          errorMessage !== null && (<p className='  text-red-500 text-lg font-bold '>{errorMessage}</p>)
          }

          <button className= ' rounded-lg border-round bg-red-700 w-full p-4 my-6 hover:bg-red-500' onClick={submitHandler}>{isSignIn ? loading? <Loader/> :"Sign In" : loading? <Loader/> :"Sign Up"} </button>
          <p className='cursor-pointer hover:underline' onClick={toggleHandler}>{isSignIn ? "New to Netfilx? Sign Up" : "Already a user? Sign In"}</p>  
  
        </form>
    </div>
  )
}

export default Login
