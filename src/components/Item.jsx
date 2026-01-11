import { Link } from "react-router";

function Item({ name, image, price, itemid }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <h4>$ {price}</h4>

      <Link to={`/>product/${itemid}`}>
        <button>Ver producto</button>
      </Link>
    </div>
  );
}

export default Item;
