import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import "./index.css";
import Catalogo_sushi from "./components/Catalogo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Catalogo_sushi />
    <Footer />
  </React.StrictMode>
);
