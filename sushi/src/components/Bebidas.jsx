import sushi_portada from "../assets/sushi_portada.png";
import StyleBebidas from "../styles/catalogo.module.css";
import BebidasContext from "../context/BebidasContext";
import { useContext } from "react";
import CategoriaContext from "../context/CategoriaContext";
const Bebidas = () => {
  const bebidas = useContext(BebidasContext);
  const { categoria } = useContext(CategoriaContext);

  if (!categoria || categoria != "bebidas") {
    return null;
  }
  return (
    <>
      <section id={StyleBebidas.portada_section}>
        <h1 id={StyleBebidas.title_main}>
          Sumérgete en la cultura japonesa y experimenta la exquisitez de
          nuestras bebidas tradicionales
        </h1>
        <picture>
          <img src={sushi_portada} alt="Imagen de portada" />
        </picture>
      </section>
      <section id={StyleBebidas.card_section}>
        <h2 id={StyleBebidas.title_section}>
          Contamos con la siguiente variedad de bebidas:
        </h2>
        {bebidas.map((dato) => (
          <article className={StyleBebidas.card_product} key={dato.id}>
            <h3>{dato.name}</h3>
            <picture>
              <img src={dato.image} alt="imagen de bebida" />
            </picture>
            <p className={StyleBebidas.description}>{dato.description}</p>
            <span className={StyleBebidas.content}>{dato.size}</span>
            <span className={StyleBebidas.content}>{dato.price}</span>
            <article className={StyleBebidas.btn_amount_product}>
              <h4 className={StyleBebidas.amount_name}>Cantidad:</h4>
              <button className={StyleBebidas.btn_icon}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className={StyleBebidas.span_amount}>1</span>
              <button className={StyleBebidas.btn_icon}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </article>
            <button id={StyleBebidas.btn_add}>Agregar al carrito</button>
          </article>
        ))}
      </section>
    </>
  );
};
export default Bebidas;
