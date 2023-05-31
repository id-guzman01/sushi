import StyleCart from '../styles/cart.module.css'
import { useState } from 'react';

const Cart = () => {
    const [mostrar, setMostrar] = useState(false);

    const showCart = () => {
        setMostrar(!mostrar);
    };
  
    return (<>
        {!mostrar ? (
            <button id={StyleCart.btn_open_cart} onClick={showCart}><i className="fa-solid fa-cart-shopping"></i></button>
        ) : (
        <section id={StyleCart.cart}>
            <h2 id={StyleCart.title_cart}>Bolsa de Compra</h2>
            <button id={StyleCart.cart_close} onClick={showCart}><i className="fa-sharp fa-solid fa-xmark"></i></button>
            <ol id={StyleCart.list_cart}>

                <li>
                    <section className={StyleCart.products_cart}>
                        <h3 className={StyleCart.name_product_cart}>Filadelfia Nori</h3>
                        <picture className={StyleCart.picture_product}>
                            <img src="https://us.123rf.com/450wm/fesenko/fesenko2301/fesenko230100004/198230100-rollos-de-sushi-filadelfia-con-salm%C3%B3n-pepino-aguacate-queso-crema-sobre-fondo-oscuro.jpg?ver=6" alt="Foto miniatura del producto a la venta"/>
                        </picture>
                        <p className={StyleCart.precio_product}><span>$</span>12000</p>

                        <button className={StyleCart.btn_trash_product_cart}><i className="fa-solid fa-trash"></i></button>

                        <article className={StyleCart.btn_product_cart}>
                            <h4 className={StyleCart.name_cantidad_cart}>Cantidad:</h4>
                            <button className={StyleCart.btn_plus_cart}><i className="fa-solid fa-plus"></i></button>
                            <span className={StyleCart.cantidad_product_cart}>1</span>
                            <button className={StyleCart.btn_minus_cart}><i className="fa-solid fa-minus"></i></button>
                        </article>

                    </section>
                </li>

                <li>
                    <section className={StyleCart.products_cart}>
                        <h3 className={StyleCart.name_product_cart}>Kyoto Roll (Tempura)</h3>
                        <picture className={StyleCart.picture_product}>
                            <img src="https://media.istockphoto.com/id/183815946/zh/%E7%85%A7%E7%89%87/shrimp-tempura-roll.jpg?s=170667a&w=0&k=20&c=flKlLU7dDokYoFOobg7Dpmvpvy21IPRHryxM4ZhjhlM=" alt="Foto miniatura del producto a la venta"/>
                        </picture>
                        <p className={StyleCart.precio_product}><span>$</span>18000</p>

                        <button className={StyleCart.btn_trash_product_cart}><i className="fa-solid fa-trash"></i></button>

                        <article className={StyleCart.btn_product_cart}>
                            <h4 className={StyleCart.name_cantidad_cart}>Cantidad:</h4>
                            <button className={StyleCart.btn_plus_cart}><i className="fa-solid fa-plus"></i></button>
                            <span className={StyleCart.cantidad_product_cart}>1</span>
                            <button className={StyleCart.btn_minus_cart}><i className="fa-solid fa-minus"></i></button>
                        </article>

                    </section>
                </li>

            </ol>
            <section id={StyleCart.section_subtotal_cart}>
                <h3 id={StyleCart.title_subtotal_cart}>Subtotal:</h3>
                <p id={StyleCart.text_pago_cart}><span>$</span>120000</p>
            </section>
            <section id={StyleCart.section_btn_cart}>
                <button id={StyleCart.btn_trash_cart}><i className="fa-solid fa-trash"></i></button>
                <button id={StyleCart.btn_realizar_cart}>Realizar Pedido <i className="fa-solid fa-arrow-right"></i></button>
            </section>
        </section>)}
    </>);

}

export default Cart;