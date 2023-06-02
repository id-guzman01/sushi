import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Register from "./components/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Sushi from "./components/Sushi.jsx";
import Bebidas from "./components/Bebidas.jsx";
import Postres from "./components/Postres.jsx";
import RegistroPrvider from "./provider/RegistroProvider.jsx";
import SushiProvider from "./provider/SushiProvider.jsx";
import CategoriaProvider from "./provider/CategoriaProvider.jsx";
import BebidasProvider from "./provider/BebidasProvider.jsx";
import PostresProvider from "./provider/PostresProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SushiProvider>
      <RegistroPrvider>
        <CategoriaProvider>
          <BebidasProvider>
            <PostresProvider>
              <Navbar />
              <Products />
              <Cart />
              <Sushi />
              <Bebidas />
              <Postres />
              <Footer />
            </PostresProvider>
          </BebidasProvider>
        </CategoriaProvider>
      </RegistroPrvider>
    </SushiProvider>
  </React.StrictMode>
);
