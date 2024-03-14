 
import { Route, Routes } from "react-router-dom";
import { NewProvider } from "./context/NewProvider";
import { Login } from "./Login";
import { Registrado } from "./Registrado";
import { NavBar } from "./NavBar";

function App() {
  return (
     <>
       <NewProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Registrado />}></Route>
        </Routes>
      </NewProvider>
     </>
     
     
  );
}

export default App;
