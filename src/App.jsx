import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/itemListContainer";
import CartWidget from "./components/cartWidget";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer saludo="¡Bienvenido a la tienda!" />
      </div>

      <div>
        <CartWidget />
      </div>
    </>
  );
}

export default App;
