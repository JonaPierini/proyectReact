import React from 'react'
import { useLocation } from 'react-router-dom'



export const Nosotros = () => {
  const location = useLocation()
  console.log(location)
 
  return (
    <div>
        Nosotros Componente
    </div>
  )
}
