import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Nav = () => {
    const [auth, setAuth] = useState(true)
    

    return (
        <>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/Nosotros'}>Nosotros</Link>
                <Link to={'/Login'}>Login</Link>
            </nav>
            <Outlet/>  {/* Aquí se renderizarán las rutas secundarias */}
        </>
    )
}

