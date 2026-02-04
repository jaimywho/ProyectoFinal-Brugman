import { useState } from "react";

function ItemCount({ stock, initial = 1, onCountChange }) {
  const [count, setCount] = useState(initial);

  function handleSubtract() {
    if (count > 1) {
      const next = count - 1;
      setCount(next);
      if (typeof onCountChange === "function") onCountChange(next);
    }
  }

  function handleAdd() {
    if (count < stock) {
      const next = count + 1;
      setCount(next);
      if (typeof onCountChange === "function") onCountChange(next);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <button onClick={handleSubtract}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default ItemCount;
