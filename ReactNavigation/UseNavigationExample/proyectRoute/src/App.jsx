import {Route, Routes } from "react-router-dom"
import { RootRoutes } from "./components/def"
import { Nosotros } from "./components/Nosotros"
import { Contactos } from "./components/Contactos"
import {Menu} from './components/Menu'
import { Home } from "./components/Home"


function App() {
  return (
    <>
        <Menu/>
        <Routes>
            <Route path={RootRoutes.Home} element={<Home/>}></Route>
        </Routes>
        <Routes>
            <Route path={RootRoutes.Nosotros} element={<Nosotros/>}></Route>
        </Routes>
        <Routes>
            <Route path={RootRoutes.Contactos} element={<Contactos/>}></Route>
        </Routes>
    </>
  )
}

export default App
