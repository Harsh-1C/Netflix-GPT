import React from 'react';
import Browse from './Browse';
import Error  from './Error';
import Login from "./Login";
import {createBrowserRouter, BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom'; 
import MovieDetail from './MovieDetail';
import PrivateRoutes from './PrivateRoutes';


import { getAuth } from "firebase/auth";
import Header from './Header';
import { useSelector } from 'react-redux';

const Body = () => {
  const currentUser = useSelector(store => store.user);
  return (
    // <RouterProvider router={appRouter} />
    <Router>
      <Header />
      <Routes>
        
        <Route element={<Login />} path='/'  />
        <Route element={<PrivateRoutes user={currentUser}>
          <Browse />
        </PrivateRoutes>} path='/Browse'/>
        <Route element={<PrivateRoutes user = {currentUser}>
          <MovieDetail />
        </PrivateRoutes>} path='/Browse/:id' />
        <Route element={<Error />} path='*' />
      </Routes>

    </Router>
  )
}

export default Body


