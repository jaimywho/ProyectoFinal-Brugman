import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/itemListContainer";
import Item from "./components/Item";
import CartWidget from "./components/cartWidget";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
import { CartProvider } from "./context/CartContext";
import CartContent from "./components/CartContent";
import Checkout from "./components/Checkout";
import CheckoutConfirmation from "./components/CheckoutConfirmation";

function App() {
  const [page, setPage] = useState("home");

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:itemid" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/checkout/confirmation/:orderId"
            element={<CheckoutConfirmation />}
          />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
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
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
