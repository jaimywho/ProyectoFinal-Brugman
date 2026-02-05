import { useParams } from "react-router";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import "../App.css";
import { useCart } from "../context/CartContext";
import { getItemData } from "../data/firebase";

function ItemDetailContainer() {
  const { itemid } = useParams();
  const [product, setProduct] = useState({});
  const { addItem } = useCart();
  const [selectedQty, setSelectedQty] = useState(1);
  const [showAdded, setShowAdded] = useState(false);

  useEffect(() => {
    if (!showAdded) return;
    const t = setTimeout(() => setShowAdded(false), 2000);
    return () => clearTimeout(t);
  }, [showAdded]);

  useEffect(() => {
    getItemData(itemid).then((response) => setProduct(response));
  }, [itemid]);

  return (
    <section>
      <h2>{product.name}</h2>
      <hr />
      <img src={product.image} alt={product.name} />
      <h4>Precio: ${product.price}</h4>
      <p>Cantidad disponible: {product.stock} </p>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginTop: 12,
          }}
        >
          <ItemCount
            stock={product.stock ?? 0}
            initial={1}
            onCountChange={(qty) => setSelectedQty(qty)}
          />

          <button
            onClick={() => {
              addItem(product, selectedQty);
              setShowAdded(true);
            }}
          >
            Añadir al carro
          </button>
        </div>
        {showAdded && (
          <div style={{ marginTop: 8, textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                background: "#f8e6ff",
                color: "#19165f",
                padding: "8px 12px",
                borderRadius: 6,
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              Producto añadido al carro
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default ItemDetailContainer;
