import React from "react";
import ReactDOM from "react-dom";

// Providers
import Providers from "./providers/Providers";
// Styles
import "./styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById("root")
);
