import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export const Login = () => {
    const handleLogin = () => {
        localStorage.setItem("auth", JSON.stringify({ isAuth: true }));
        
      };

      const handleLogout = () => {
        localStorage.clear();
      };
  return (
    <>
        <h1>Login</h1>
       
           
            <Link className='button' onClick={handleLogout} to={'/'}>
                Salir
            </Link> :  
            <Link className='button' onClick={handleLogin} to={'/private'}>
                Ingresar
            </Link>
     
       
       
    </>
  )
}
