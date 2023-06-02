import sushi_portada from "../assets/sushi_portada.png";
import futomaki from "../assets/futomaki.png";
import StyleSushi from "../styles/sushi.module.css";

const Catalogo_sushi = () => {
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
        <article className={StyleSushi.card_product}>
          <h3> Futomaki de langostino</h3>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <p className={StyleSushi.description}>
            Deliciosa combinación de langostino crujiente y suave, envuelto en
            una capa de arroz de sushi y alga nori.
          </p>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
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
        <article className={StyleSushi.card_product}>
          <h3> Futomaki de langostino</h3>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <p className={StyleSushi.description}>
            Deliciosa combinación de langostino crujiente y suave, envuelto en
            una capa de arroz de sushi y alga nori.
          </p>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
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
        <article className={StyleSushi.card_product}>
          <h3> Futomaki de langostino</h3>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <p className={StyleSushi.description}>
            Deliciosa combinación de langostino crujiente y suave, envuelto en
            una capa de arroz de sushi y alga nori.
          </p>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
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
        <article className={StyleSushi.card_product}>
          <h3> Futomaki de langostino</h3>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <p className={StyleSushi.description}>
            Deliciosa combinación de langostino crujiente y suave, envuelto en
            una capa de arroz de sushi y alga nori.
          </p>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
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
      </section>
    </>
  );
};
export default Catalogo_sushi;
