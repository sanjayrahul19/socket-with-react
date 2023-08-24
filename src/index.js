import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Socket from "./Socket/Socket";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Socket>
    <App />
  </Socket>
);
