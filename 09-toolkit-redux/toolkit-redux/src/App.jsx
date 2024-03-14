import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmoutn,
  reset,
  prueba,
} from "./store/slices/counter/counterSlice";
import "./App.css";
import { useState } from "react";

function App() {
  //Lee y seleciona algo de nuestor store
  //el .contador es el mismo nombre que esta en el store
  const count = useSelector((state) => state.contador.count);

  //Despacha las acciones
  const dispatch = useDispatch();

  const [numero, setNumero] = useState(7);

  const handleChange = (e) => {
    setNumero(e.target.value);
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(reset())}>
          Reset
        </button>

        {/* Para pasarle argumentos */}
        <button
          aria-label="Incremente x 2"
          onClick={() => dispatch(incrementByAmoutn(2))}
        >
          Incremente x 2
        </button>

        {/* Ejemplo mas complejo */}
        <input value={numero} onChange={handleChange}></input>
        <button
          aria-label="Incremente x numero"
          onClick={() => dispatch(incrementByAmoutn(numero))}
        >
          Incremente X {numero}?
        </button>
        <button onClick={() => dispatch(prueba())}>Prueba</button>
      </div>
    </div>
  );
}

export default App;
