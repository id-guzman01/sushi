import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Register from "./components/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import RegistroPrvider from "./provider/RegistroProvider.jsx";
import Catalogo_sushi from "./components/Catalogo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RegistroPrvider>
      <Products />
      <Catalogo_sushi />
      <Footer />
    </RegistroPrvider>
  </React.StrictMode>
);
