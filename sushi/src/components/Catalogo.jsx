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
        <h2> Contamos con la siguiente variedad de sushi:</h2>
        <article id={StyleSushi.card_sushi}>
          <h2> Futomaki de langostino</h2>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
          <span className={StyleSushi.description}>
            En su interior, encontrarás una deliciosa combinación de langostino
            crujiente y suave, envuelto en una capa de arroz de sushi y alga
            nori.
          </span>
          <section id={StyleSushi.amount_section}>
            <h3>Cantidad:</h3>
            <button>
              <i className="fa-solid fa-minus"></i>
            </button>
            <span>1</span>
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </section>
          <button id={StyleSushi.add_button}>Añadir</button>
        </article>
        <article id={StyleSushi.card_sushi}>
          <h2> Futomaki de langostino</h2>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
          <span className={StyleSushi.description}>
            En su interior, encontrarás una deliciosa combinación de langostino
            crujiente y suave, envuelto en una capa de arroz de sushi y alga
            nori.
          </span>
          <section id={StyleSushi.amount_section}>
            <h3>Cantidad:</h3>
            <button>
              <i className="fa-solid fa-minus"></i>
            </button>
            <span>1</span>
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </section>
          <button id={StyleSushi.add_button}>Añadir</button>
        </article>
        <article id={StyleSushi.card_sushi}>
          <h2> Futomaki de langostino</h2>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
          <span className={StyleSushi.description}>
            En su interior, encontrarás una deliciosa combinación de langostino
            crujiente y suave, envuelto en una capa de arroz de sushi y alga
            nori.
          </span>
          <section id={StyleSushi.amount_section}>
            <h3>Cantidad:</h3>
            <button>
              <i className="fa-solid fa-minus"></i>
            </button>
            <span>1</span>
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </section>
          <button id={StyleSushi.add_button}>Añadir</button>
        </article>
        <article id={StyleSushi.card_sushi}>
          <h2> Futomaki de langostino</h2>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
          <span className={StyleSushi.description}>
            En su interior, encontrarás una deliciosa combinación de langostino
            crujiente y suave, envuelto en una capa de arroz de sushi y alga
            nori.
          </span>
          <section id={StyleSushi.amount_section}>
            <h3>Cantidad:</h3>
            <button>
              <i className="fa-solid fa-minus"></i>
            </button>
            <span>1</span>
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </section>
          <button id={StyleSushi.add_button}>Añadir</button>
        </article>
        <article id={StyleSushi.card_sushi}>
          <h2> Futomaki de langostino</h2>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
          <span className={StyleSushi.description}>
            En su interior, encontrarás una deliciosa combinación de langostino
            crujiente y suave, envuelto en una capa de arroz de sushi y alga
            nori.
          </span>
          <section id={StyleSushi.amount_section}>
            <h3>Cantidad:</h3>
            <button>
              <i className="fa-solid fa-minus"></i>
            </button>
            <span>1</span>
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </section>
          <button id={StyleSushi.add_button}>Añadir</button>
        </article>
        <article id={StyleSushi.card_sushi}>
          <h2> Futomaki de langostino</h2>
          <picture>
            <img src={futomaki} alt="futomaki de langostinos" />
          </picture>
          <span className={StyleSushi.content}>Contiene 10 piezas</span>
          <span className={StyleSushi.content}>$25000</span>
          <span className={StyleSushi.description}>
            En su interior, encontrarás una deliciosa combinación de langostino
            crujiente y suave, envuelto en una capa de arroz de sushi y alga
            nori.
          </span>
          <section id={StyleSushi.amount_section}>
            <h3>Cantidad:</h3>
            <button>
              <i className="fa-solid fa-minus"></i>
            </button>
            <span>1</span>
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </section>
          <button id={StyleSushi.add_button}>Añadir</button>
        </article>
      </section>
    </>
  );
};
export default Catalogo_sushi;
