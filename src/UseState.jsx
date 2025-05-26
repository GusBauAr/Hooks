import { useState } from "react";
import "./App.css";

function UseState() {
  const [count, setCount] = useState(0);

  const [visible, setVisible] = useState(true)

  return (
    <>
      <h1>useState Contador</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>

      <h1>useState mostrar y ocultar</h1>
      { visible && <p>Gustavo Bautista Arce</p>}
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>

    </>
  );
}
export default UseState;
