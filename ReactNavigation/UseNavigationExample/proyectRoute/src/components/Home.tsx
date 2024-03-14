import React from 'react'
import { useLocation } from 'react-router-dom'

export const Home = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
        <h1>Home</h1>
        <span>Pagina principal</span>
    </div>
  )
}
