import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleHandler = ()=> {
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <Header/>
      <div className= " absolute ">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bg' />
      </div>
     
        <form className="bg-black w-3/12 absolute my-36 mx-auto left-0 right-0 text-white bg-opacity-80 p-10 rounded-lg">

          <h1 className=' font-bold text-3xl py-4 '>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {
            !isSignIn && ( <input type='text' placeholder='Enter your full name' className=' w-full p-4 my-4 bg-gray-500 rounded-sm'/>)
          }
          
         
          <input type='email' placeholder='Enter your email' className=' w-full p-4 my-4 bg-gray-500 rounded-sm'/>
          <input type='password' placeholder='Enter your password' className=' w-full p-4 my-4 bg-gray-500 rounded-sm  ' />
          <button className= ' rounded-lg border-round bg-red-700 w-full p-4 my-6' >{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className=' cursor-pointer' onClick={toggleHandler}>{isSignIn ? "New to Netfilx? Sign Up" : "Already a user? Sign In"}</p>

        </form>
    </div>
  )
}

export default Login
