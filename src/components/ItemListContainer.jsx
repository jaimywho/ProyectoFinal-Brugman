import products from "../data/products";
import Item from "./Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getItemData, getData, getCategoryData } from "../data/firebase";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  console.log(categoryID);

  useEffect(() => {
    if (categoryID) {
      getCategoryData(categoryID).then((respuesta) => setProducts(respuesta));
    } else {
      getData().then((respuesta) => setProducts(respuesta));
    }
  }, [categoryID]);

  return (
    <div className="list">
      {products.map((item) => {
        return (
          <Item
            key={item.id}
            itemid={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            stock={item.stock}
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;
