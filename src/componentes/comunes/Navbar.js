import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../hooks/UserContext"; // Import the useUser hook

export const Navbar = () => {
  const { user } = useUser(); // Get the user data from the context

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Gamebook
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
            }
            to="/games/ps"
          >
            PlayStation
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
            }
            to="/games/xbox"
          >
            Xbox
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
            }
            to="/games/switch"
          >
            Switch
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
            }
            to="/games/pc"
          >
            PC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
            }
            exact={true}
            to="/collection"
          >
            Mi Colección
          </NavLink>
        
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="navbar-text">Usuario: {user ? user.username : "Invitado"}</span>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
            }
            to="/"
          >
            Salir
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
