import { useParams, Link } from "react-router";

function CheckoutConfirmation() {
  const { orderId } = useParams();

  return (
    <section style={{ padding: 16, alignItems: "center" }}>
      <h2>Gracias por tu compra</h2>
      <p>
        Tu número de pedido es <strong>{orderId}</strong>
      </p>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          gap: 8,
          padding: 10,
          maxWidth: 200,
        }}
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWZzbmphNWdybnVzbzV6MWZkcmlqNHJzeXhubDE2emI1OGk3bDIzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ndAvMC5LFPNMCzq7m/giphy.gif"
        alt="feliz"
      />
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </section>
  );
}

export default CheckoutConfirmation;
