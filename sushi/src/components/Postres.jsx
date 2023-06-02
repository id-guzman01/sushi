import sushi_portada from "../assets/sushi_portada.png";
import StylePostres from "../styles/catalogo.module.css";
import PostresContext from "../context/PostresContext";
import { useContext } from "react";
import CategoriaContext from "../context/CategoriaContext";
const Postres = () => {
  const postres = useContext(PostresContext);
  const { categoria } = useContext(CategoriaContext);

  if (!categoria || categoria != "postres") {
    return null;
  }
  return (
    <>
      <section id={StylePostres.portada_section}>
        <h1 id={StylePostres.title_main}>
          ¡Haz tu pedido y déjate cautivar por la dulzura de Japón!
        </h1>
        <picture>
          <img src={sushi_portada} alt="Imagen de portada" />
        </picture>
      </section>
      <section id={StylePostres.card_section}>
        <h2 id={StylePostres.title_section}>
          Contamos con la siguiente variedad de postres:
        </h2>
        {postres.map((dato) => (
          <article className={StylePostres.card_product} key={dato.id}>
            <h3>{dato.name}</h3>
            <picture>
              <img src={dato.image} alt="imagen de postre" />
            </picture>
            <p className={StylePostres.description}>{dato.description}</p>
            <span className={StylePostres.content}>{dato.size}</span>
            <span className={StylePostres.content}>{dato.price}</span>
            <article className={StylePostres.btn_amount_product}>
              <h4 className={StylePostres.amount_name}>Cantidad:</h4>
              <button className={StylePostres.btn_icon}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className={StylePostres.span_amount}>1</span>
              <button className={StylePostres.btn_icon}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </article>
            <button id={StylePostres.btn_add}>Agregar al carrito</button>
          </article>
        ))}
      </section>
    </>
  );
};
export default Postres;
