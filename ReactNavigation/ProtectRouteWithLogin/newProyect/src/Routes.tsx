import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { Nosotros } from "./Nosotros";
import { Login } from "./Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { Private } from "./Private";

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
     <Route element={<Nav/>}>
        <Route path="/" index element={<Home/>} />
        <Route path="/Nosotros" element={<Nosotros/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="*" element={<h1>Error 404 - Not Found</h1>} />
        <Route
            path="/private"
            element={
               <ProtectedRoute>
                    <Private></Private>
               </ProtectedRoute>
            }
          /> 
     </Route>
   
    </>
    )
)

export const Routes = () => {
    return <RouterProvider router={router} />;
};