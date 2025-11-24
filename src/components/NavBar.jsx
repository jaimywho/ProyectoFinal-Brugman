function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/perro.png" alt="Logo" className="logo" />
        </div>

        <ul className="nav-links">
          <ul>
            <a href="https://www.google.com/" target="_blank">
              Inicio
            </a>
          </ul>
          <ul>
            <a href="https://www.google.com/">Productos</a>
          </ul>
          <ul>
            <a href="https://www.google.com/">Contacto</a>
          </ul>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
