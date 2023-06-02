import sushi_portada from "../assets/sushi_portada.png";
import StyleSushi from "../styles/catalogo.module.css";
import SushiContext from "../context/SushiContext";
import { useContext } from "react";
import CategoriaContext from "../context/CategoriaContext";
const Sushi = () => {
  const sushi = useContext(SushiContext);
  const { categoria } = useContext(CategoriaContext);

  if (!categoria || categoria != "sushi") {
    return null;
  }
  return (
    <>
      <section id={StyleSushi.portada_section}>
        <h1 id={StyleSushi.title_main}>
          Sumérgete en el mundo del sushi: ¡Una explosión de sabores te espera!
        </h1>
        <picture>
          <img src={sushi_portada} alt="Imagen de portada" />
        </picture>
      </section>
      <section id={StyleSushi.card_section}>
        <h2 id={StyleSushi.title_section}>
          Contamos con la siguiente variedad de sushi:
        </h2>
        {sushi.map((dato) => (
          <article className={StyleSushi.card_product} key={dato.id}>
            <h3>{dato.name}</h3>
            <picture>
              <img src={dato.img} alt="imagen de tipo de sushi" />
            </picture>
            <p className={StyleSushi.description}>{dato.description}</p>
            <span className={StyleSushi.content}>{dato.parts} piezas</span>
            <span className={StyleSushi.content}>$ {dato.price}</span>
            <article className={StyleSushi.btn_amount_product}>
              <h4 className={StyleSushi.amount_name}>Cantidad:</h4>
              <button className={StyleSushi.btn_icon}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className={StyleSushi.span_amount}>1</span>
              <button className={StyleSushi.btn_icon}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </article>
            <button id={StyleSushi.btn_add}>Agregar al carrito</button>
          </article>
        ))}
      </section>
    </>
  );
};
export default Sushi;
