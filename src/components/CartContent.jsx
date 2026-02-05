import { Link } from "react-router";
import { useCart } from "../context/CartContext";

function CartContent() {
  const { cart, clearCart, removeItem } = useCart();

  const totalPrice = cart.reduce(
    (s, p) => s + (p.price || 0) * (p.quantity || 0),
    0,
  );

  return (
    <section style={{ padding: 16 }}>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr 120px 100px 50px",
              gap: 12,
              alignItems: "center",
              fontWeight: 700,
              borderBottom: "1px solid #ddd",
              paddingBottom: 8,
            }}
          ></div>

          <ul style={{ listStyle: "none", padding: 0, marginTop: 8 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr 120px 100px 50px",
                  gap: 12,
                  alignItems: "center",
                  marginBottom: 12,
                  padding: 8,
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={80}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{item.name}</div>
                  <div style={{ color: "#666", fontSize: 13 }}>
                    Cantidad: {item.quantity}
                  </div>
                </div>
                <div>${(item.price || 0).toFixed(2)}</div>
                <div style={{ fontWeight: 700 }}>
                  ${((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  style={{
                    background: "#FF474D",
                    color: "white",
                    border: "2px solid red",
                    borderRadius: "4px",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "0px",
                    lineHeight: "1",
                  }}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 16, fontWeight: 700 }}>
            Total: ${totalPrice.toFixed(2)}
          </div>

          <div
            style={{
              marginTop: 16,
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          ></div>
          <div
            style={{
              marginTop: 16,
              display: "flex",
              gap: 12,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button onClick={() => clearCart()}>
              Eliminar todos los productos
            </button>
            <Link to="/checkout">
              <button>Ir a pagar</button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartContent;
