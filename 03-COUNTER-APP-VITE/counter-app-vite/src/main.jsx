import React from "react";
import ReactDOM from "react-dom/client";

import { CounterApp } from "./CounterApp";
import FirsApp from "./FirstApp";

let props = {
  titulo: "El titulo",
  subtiulo: "Subtiulo",
  nombre: "Jona",
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirsApp titulo="El tituuuuuulo" subtitulo="Subtiulo" nombre="Jona" props = {props} /> */}
    <CounterApp value={10} /> 
  </React.StrictMode>
);
