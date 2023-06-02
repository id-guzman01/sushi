import StyleCart from "../styles/cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import UserContext from "../context/UserContext";

const Cart = () => {
  const [mostrar, setMostrar] = useState(false);
  const { listCart, subTotal, reset, remove, plusCount, minusCount } =
    useContext(CartContext);
  const { userLog } = useContext(UserContext);

  const showCart = () => {
    setMostrar(!mostrar);
  };

  const resetCart = () => {
    reset();
  };

  const removeProduct = (name) => {
    remove(name);
  };

  const countPlus = (name, contador) => {
    contador += 1;
    plusCount(name, contador);
  };

  const countMinus = (name, contador) => {
    contador -= 1;
    minusCount(name, contador);
  };

  return (
    <>
      {!mostrar ? (
        <button id={StyleCart.btn_open_cart} onClick={showCart}>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      ) : (
        <section id={StyleCart.cart}>
          <h2 id={StyleCart.title_cart}>Bolsa de Compra</h2>
          <button id={StyleCart.cart_close} onClick={showCart}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
          <ol id={StyleCart.list_cart}>
            {listCart.map((list) => (
              <li key={list.id}>
                <section className={StyleCart.products_cart}>
                  <h3 className={StyleCart.name_product_cart}>{list.name}</h3>
                  <picture className={StyleCart.picture_product}>
                    <img
                      src={list.image}
                      alt="Foto miniatura del producto a la venta"
                    />
                  </picture>
                  <p className={StyleCart.precio_product}>
                    <span>$</span>
                    {list.costo}
                  </p>

                  <button
                    className={StyleCart.btn_trash_product_cart}
                    onClick={(evento) => {
                      evento.preventDefault();
                      removeProduct(list.name);
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>

                  <article className={StyleCart.btn_product_cart}>
                    <h4 className={StyleCart.name_cantidad_cart}>Cantidad:</h4>
                    <button className={StyleCart.btn_plus_cart}>
                      <i
                        className="fa-solid fa-plus"
                        onClick={(evento) => {
                          evento.preventDefault();
                          countPlus(list.name, list.contador);
                        }}
                      ></i>
                    </button>
                    <span className={StyleCart.cantidad_product_cart}>
                      {list.contador}
                    </span>
                    <button className={StyleCart.btn_minus_cart}>
                      <i
                        className="fa-solid fa-minus"
                        onClick={(evento) => {
                          evento.preventDefault();
                          countMinus(list.name, list.contador);
                        }}
                      ></i>
                    </button>
                  </article>
                </section>
              </li>
            ))}
          </ol>
          <section id={StyleCart.section_subtotal_cart}>
            <h3 id={StyleCart.title_subtotal_cart}>Subtotal:</h3>
            <p id={StyleCart.text_pago_cart}>
              <span>$</span>
              {subTotal}
            </p>
          </section>
          <section id={StyleCart.section_btn_cart}>
            <button
              id={StyleCart.btn_trash_cart}
              onClick={(evento) => {
                evento.preventDefault();
                resetCart();
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            {!userLog ? (
              <button id={StyleCart.btn_realizar_cart}>Iniciar Sesion</button>
            ) : (
              <button id={StyleCart.btn_realizar_cart}>
                Realizar Pedido <i className="fa-solid fa-arrow-right"></i>
              </button>
            )}
          </section>
        </section>
      )}
    </>
  );
};

export default Cart;
