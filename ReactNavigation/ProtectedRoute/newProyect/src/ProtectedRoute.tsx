import React from 'react'
import {Navigate} from 'react-router-dom'

export const PotectedRoute = ({children}) => {
    const isAuth = JSON.parse(localStorage.getItem("auth"))?.isAuth || undefined;
    return isAuth ? children : <Navigate to="/" />;
}
