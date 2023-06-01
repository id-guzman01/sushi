import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './components/Footer.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import Register from './components/Register.jsx'
import RegistroPrvider from './provider/RegistroProvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RegistroPrvider>

    </RegistroPrvider>
  </React.StrictMode>,
)
