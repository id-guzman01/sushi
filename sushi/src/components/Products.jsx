import principal from "../assets/sushi.jpg";
import bebidas from "../assets/bebidas.jpg";
import postres from "../assets/postres.jpg";
import StyleProducts from "../styles/products.module.css";
import CategoriaContext from "../context/CategoriaContext";
import { useContext } from "react";
const Products = () => {
  const { setCategoria } = useContext(CategoriaContext);
  return (
    <>
      <section id={StyleProducts.main_section}>
        <span>
          <h1 id={StyleProducts.title_pedidos}>Zen Sushi Pedidos</h1>
        </span>
        <p className={StyleProducts.description}>
          ¡Deléitate con nuestra selección de platos y realiza tu pedido con un
          simple clic!
        </p>
        <p className={StyleProducts.description}>
          En nuestro menú encontrarás una amplia variedad de opciones culinarias
          que complacerán todos tus antojos. Desde platos principales hasta
          postres tentadores, ¡tenemos algo para todos los paladares! Haz clic a
          continuación para descubrir nuestros suculentos productos y realizar
          tu pedido de forma rápida y sencilla.
        </p>
      </section>
      <section id={StyleProducts.products_section}>
        <h2 id={StyleProducts.title_products}>Productos:</h2>
        <article
          className={StyleProducts.card_products}
          onClick={(event) => {
            setCategoria("sushi");
          }}
        >
          <h2 className={StyleProducts.title_card}>Plato Principal</h2>
          <picture>
            <img src={principal} alt="Plato Principal" />
            <p>¡No esperes más, el placer gastronómico está a solo un clic!</p>
          </picture>
        </article>
        <article
          className={StyleProducts.card_products}
          onClick={() => {
            setCategoria("bebidas");
          }}
        >
          <h2 className={StyleProducts.title_card}>Bebidas Tradicionales</h2>
          <picture>
            <img src={bebidas} alt="Bebidas tradicionales" />
            <p>¡No esperes más, el placer gastronómico está a solo un clic!</p>
          </picture>
        </article>
        <article
          className={StyleProducts.card_products}
          onClick={() => {
            setCategoria("postres");
          }}
        >
          <h2 className={StyleProducts.title_card}>Postres</h2>
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
