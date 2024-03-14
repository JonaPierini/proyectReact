import React, { useContext, useEffect } from 'react'
import { NewContext } from './context/NewContext'
import { useNavigate } from 'react-router-dom'
 

export const Login = () => {

  const navigate = useNavigate()

  const {handleRegister} = useContext(NewContext)

 
  const handleLogin = () =>{
    handleRegister()
    navigate('/')
 
  }
   

  return (
   <>
    <h1>Login</h1>
    <button onClick={handleLogin}>Registrarse</button>
   </>
  )
}
