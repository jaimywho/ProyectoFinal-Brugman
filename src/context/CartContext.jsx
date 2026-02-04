import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(product, quantity) {
    setCart((prev) => {
      const id = product.id ?? product.itemid ?? null;
      if (id === null) {
        // fallback: push product as-is with quantity
        return [...prev, { ...product, quantity }];
      }

      const idx = prev.findIndex((p) => p.id === id || p.itemid === id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = {
          ...copy[idx],
          quantity: (copy[idx].quantity || 0) + quantity,
        };
        return copy;
      }

      const entry = { ...product, quantity };
      // ensure stable `id` field for cart items
      entry.id = id;
      return [...prev, entry];
    });
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalQuantity() {
    return cart.reduce((s, p) => s + (p.quantity || 0), 0);
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartContext;
