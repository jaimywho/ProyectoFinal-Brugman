import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/itemListContainer";
import CartWidget from "./components/cartWidget";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [page, setPage] = useState("home");

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer saludo="¡Bienvenido a la tienda!" />}
        />
        <Route path="/product/:itemid" element={<ItemDetailContainer />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404: Página no encontrada</h1>
              <button>
                <Link to="/"> Volver al home </Link>
              </button>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
