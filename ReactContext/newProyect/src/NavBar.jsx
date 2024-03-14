import { Link, NavLink } from "react-router-dom";
import { NewContext } from "./context/NewContext";
import { useContext } from "react";


export const NavBar = () => {

    const {name, handleLogout} = useContext(NewContext)
    
  

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
       Registrado
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/login"
          >
           Login
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          {
            name ? <span className="nav-item nav-link text-primary">{name}</span> : <></>
          }
           

          <button onClick={handleLogout} className="nav-item nav-link btn">
            LogOut
          </button>
        </ul>
      </div>
    </nav>
  );
};
