import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RegistroPrvider from "./provider/RegistroProvider.jsx";
import SushiProvider from "./provider/SushiProvider.jsx";
import CategoriaProvider from "./provider/CategoriaProvider.jsx";
import BebidasProvider from "./provider/BebidasProvider.jsx";
import PostresProvider from "./provider/PostresProvider.jsx";
import CartProvider from "./provider/CartProvider.jsx";
import UserProvider from "./provider/UserProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SushiProvider>
      <RegistroPrvider>
        <CategoriaProvider>
          <BebidasProvider>
            <PostresProvider>
              <CartProvider>
                <UserProvider>
                    <App />
                </UserProvider>
              </CartProvider>
            </PostresProvider>
          </BebidasProvider>
        </CategoriaProvider>
      </RegistroPrvider>
    </SushiProvider>
  </React.StrictMode>,
)
