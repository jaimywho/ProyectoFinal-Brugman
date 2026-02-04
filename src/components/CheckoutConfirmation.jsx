import { useParams, Link } from "react-router";

function CheckoutConfirmation() {
  const { orderId } = useParams();

  return (
    <section style={{ padding: 16 }}>
      <h2>Gracias por tu compra</h2>
      <p>
        Tu número de pedido es <strong>{orderId}</strong>
      </p>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </section>
  );
}

export default CheckoutConfirmation;
