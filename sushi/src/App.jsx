import "./App.css";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Register from "./components/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Sushi from "./components/Sushi.jsx";
import Bebidas from "./components/Bebidas.jsx";
import Postres from "./components/Postres.jsx";
import Login from "./components/Login";


const App = () => {
  return <>
        <Navbar />
        <Login />
        <Register />
        <Products />
        <Cart />
        <Sushi />
        <Bebidas />
        <Postres />
        <Footer />
  </>;
};

export default App;
