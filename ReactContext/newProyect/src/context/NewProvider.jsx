import { useEffect, useState } from "react";
import { NewContext } from "./NewContext";

export const NewProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState(user);

  //EL USEEFFECT SIEMPRE (en todos los casos) Como MINIMO se ejecuta una vez.
  //ACA ni bien arranca la aplicación se dispara y en este caso se vuelve a disparar cuando cambia el name
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(name));
  }, [name]);

  // EN ESTE CASO SE DISPARA UNA UNICA VEZ (PORQUE SIEMPRE COMO MIMINO SE DISPARA UNA VEZ) pero despues no se dispara mas. Por ende no funciona
  //   useEffect(() => {
  //     localStorage.setItem('user', JSON.stringify(name))
  //   }, [])

  const handleRegister = () => {
    setName("Jona");
  };

  const handleLogout = () =>{
    setName('')
    localStorage.removeItem('user')
  }

  return (
    <NewContext.Provider
      value={{
        handleRegister,
        name,
        handleLogout
      }}
    >
      {children}
    </NewContext.Provider>
  );
};
