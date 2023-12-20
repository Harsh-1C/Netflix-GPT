import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidation} from "../Utils/validate"
import userEvent from '@testing-library/user-event';


const Login = () => {

  // State Variables
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);


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
  }

  return (
    <div>
      <Header/>
      <div className= " absolute ">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bg' />
      </div>
     
        <form onSubmit={(e) => e.preventDefault()} className="bg-black w-3/12 absolute my-36 mx-auto left-0 right-0 text-white bg-opacity-80 p-10 rounded-lg">

        

          <h1 className=' font-bold text-3xl py-4 '>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {
            !isSignIn && ( <input ref={fullName} type='text' placeholder='Enter your full name' className=' w-full p-4 my-4 bg-gray-500 rounded-sm'/>)
          }
          
         
          <input ref={email} type='email' placeholder='Enter your email' className=' w-full p-4 my-4 bg-gray-500 rounded-sm'/>

          <input ref={password} type='password' placeholder='Enter your password' className=' w-full p-4 my-4 bg-gray-500 rounded-sm  ' />

          {
          errorMessage !== null && (<p className='  text-red-500 text-lg font-bold '>{errorMessage}</p>)
          }

          <button className= ' rounded-lg border-round bg-red-700 w-full p-4 my-6' onClick={submitHandler}>{isSignIn ? "Sign In" : "Sign Up"} </button>
          <p className=' cursor-pointer' onClick={toggleHandler}>{isSignIn ? "New to Netfilx? Sign Up" : "Already a user? Sign In"}</p>

        </form>
    </div>
  )
}

export default Login
