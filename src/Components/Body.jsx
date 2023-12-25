import React, { useEffect } from 'react';
import Browse from './Browse';
import Error  from './Error';
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../Utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/store/userSlice';

const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login />,
    },
    {
      path:"/Browse",
      element:<Browse />,
    },
    {
      path:"*",
      element:<Error />
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // After sign up or sign in
        const {uid, displayName, email} = user;
        dispatch(addUser({uid:uid, displayName: displayName, email: email}));
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
