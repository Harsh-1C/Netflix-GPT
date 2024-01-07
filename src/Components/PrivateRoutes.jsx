
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'



const PrivateRoutes = ({user,children}) => {

    console.log(user);

    if(user===null){
        return <Navigate to='/'  />;
    }
    return children;

}

export default PrivateRoutes;
