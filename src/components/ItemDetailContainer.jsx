import { useParams } from "react-router";

function ItemDetailContainer() {
  const { itemID } = useParams();

  return (
    <section>
      <h2>Nombre</h2>
      <hr />
      <img src="/" alt="imagen-producto" />
      <h4>Precio: $</h4>
    </section>
  );
}

export default ItemDetailContainer;
