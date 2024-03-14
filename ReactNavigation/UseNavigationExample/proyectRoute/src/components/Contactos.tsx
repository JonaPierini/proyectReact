import React from 'react'
import { useLocation } from 'react-router-dom'

export const Contactos = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>Contactos Componentes</div>
  )
}
