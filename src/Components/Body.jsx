import React from 'react';
import Browse from './Browse';
import Error  from './Error';
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 


const Body = () => {

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


  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
