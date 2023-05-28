import React from "react";
import principal from "../assets/plato_principal.jpg";
import bebidas from "../assets/bebidas.jpg";
import postres from "../assets/postres.jpg";

const Products = () => {
  return (
    <>
      <section id="main-section">
        <span>
          <h1 id="title-pedidos">Zen Sushi Pedidos</h1>
        </span>
        <p className="description">
          ¡Deléitate con nuestra selección de platos y realiza tu pedido con un
          simple clic!
        </p>
        <p className="description">
          En nuestro menú encontrarás una amplia variedad de opciones culinarias
          que complacerán todos tus antojos. Desde platos principales hasta
          postres tentadores, ¡tenemos algo para todos los paladares! Haz clic a
          continuación para descubrir nuestros suculentos productos y realizar
          tu pedido de forma rápida y sencilla.
        </p>
      </section>
      <section id="products-section">
        <h2 id="title-products">Productos:</h2>
        <article className="card-products">
          <h2 className="title-card">Plato Principal</h2>
          <picture>
            <img src={principal} alt="Plato Principal" />
            <p>¡No esperes más, el placer gastronómico está a solo un clic!</p>
          </picture>
        </article>
        <article className="card-products">
          <h2 className="title-card">Bebidas</h2>
          <picture>
            <img src={bebidas} alt="Bebidas tradicionales" />
            <p>¡No esperes más, el placer gastronómico está a solo un clic!</p>
          </picture>
        </article>
        <article className="card-products">
          <h2 className="title-card">Postres</h2>
          <picture>
            <img src={postres} alt="Postres tradicionales" />
            <p>¡No esperes más, el placer gastronómico está a solo un clic!</p>
          </picture>
        </article>
      </section>
    </>
  );
};
export default Products;
