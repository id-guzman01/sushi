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
<<<<<<< HEAD
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
=======
import Catalogo_sushi from "./components/Catalogo.jsx";
import Login from "./components/Login.jsx";
import UserProvider from "./provider/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD

>>>>>>> 9e36333d602d7b615d46ce4cb0370189584406c3
  </React.StrictMode>
);
=======
    <RegistroPrvider>
    </RegistroPrvider>
  </React.StrictMode>,
)
>>>>>>> 1fda40c1f10254991f54aa9580c09f7dcc9bb9bb
