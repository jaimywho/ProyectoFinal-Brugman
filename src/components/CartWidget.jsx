import { useCart } from "../context/CartContext";

function CartWidget() {
  const { getTotalQuantity } = useCart();
  const total = getTotalQuantity ? getTotalQuantity() : 0;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: 20 }}>🛒</span>
      <span style={{ fontSize: 14, fontWeight: 600 }}>{total}</span>
    </div>
  );
}

export default CartWidget;
