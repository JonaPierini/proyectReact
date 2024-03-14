import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Nav = () => {
    const [auth, setAuth] = useState(true)
    
    const handleLogin = () => {
        localStorage.setItem("auth", JSON.stringify({ isAuth: true }));
        setAuth(!auth)
      };
      const handleLogout = () => {
        localStorage.clear();
        setAuth(!auth)
      };

    return (
        <>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/Nosotros'}>Nosotros</Link>
                <Link to={'/private'}>Ir a sector Privado</Link>
                {
                    auth ? <button onClick={handleLogin}>Login</button>
                    :  <Link className='button' to={'/'} onClick={handleLogout}>Logout</Link>
                }
                
               
            </nav>
            <Outlet/>  {/* Aquí se renderizarán las rutas secundarias */}
        </>
    )
}

