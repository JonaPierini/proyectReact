import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RootRoutes } from './def'

export const Navegacion = () => {
  const navegacion = useNavigate()
  let productos = [
    {
      id: 1,
      nombre: 'Producto1',
      descripcion: 'Descripción1'
    },
    {
      id: 2,
      nombre: 'Producto2',
      descripcion: 'Descripción2'
    }
  ]

  const handleNavigate = (ruta, estado) => {
    navegacion(ruta, {
      state: {
        prod: estado,
      },
    });
  };
 

  return (
     <>
     <div>
      <nav>
        <ul>
          <li>
            <button onClick={()=> handleNavigate(RootRoutes.Home, productos)}>Home</button>
          </li>
          <li>
          <button onClick={()=> handleNavigate(RootRoutes.Nosotros, productos)}>Nosotros</button>
          </li>
          <li>
          <button onClick={()=> handleNavigate(RootRoutes.Contactos, productos)}>Contactos</button>
          </li>
           
        </ul>
      </nav>
      <hr></hr>
    </div>
     </>
  )
}
