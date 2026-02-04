import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { clearCart } = useCart();

  function handlePayment(e) {
    e.preventDefault();
    const orderId = `ORD-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    clearCart();
    navigate(`/checkout/confirmation/${orderId}`);
  }

  return (
    <section style={{ padding: 16 }}>
      <h2>Finalizar tu compra</h2>
      <form
        onSubmit={handlePayment}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: 400,
        }}
      >
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          Nombre
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: "6px 8px" }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "6px 8px" }}
          />
        </label>

        <button type="submit">Pago hecho</button>
      </form>
    </section>
  );
}

export default Checkout;
