import CartWidget from "./cartWidget";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink to="/">
            <img src="/perro.png" alt="Logo" className="logo" />
          </NavLink>
        </div>

        <ul className="nav-links">
          <ul>
            <NavLink to="/category/comida">Comida</NavLink>
          </ul>
          <ul>
            <NavLink to="/category/accesorios">Accesorios</NavLink>
          </ul>
          <ul>
            <NavLink to="/category/juguetes">Juguetes</NavLink>
          </ul>
        </ul>

        <NavLink to="/cart">
          <CartWidget />
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
