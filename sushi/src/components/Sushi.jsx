import sushi_portada from "../assets/sushi_portada.png";
import StyleSushi from "../styles/catalogo.module.css";
import SushiContext from "../context/SushiContext";
import { useContext, useState } from "react";
import CategoriaContext from "../context/CategoriaContext";
import CartContext from "../context/CartContext";

const Sushi = () => {
  const sushi = useContext(SushiContext);
  const { categoria } = useContext(CategoriaContext);
  const { add } = useContext(CartContext);

  let [contador, setContador] = useState(0);

  const contadorPlus = () => {
    setContador((contador += 1));
  };
  const contadorMinus = () => {
    if (contador > 0) {
      setContador((contador -= 1));
    }
  };

  const contadorInit = () => {
    setContador(0);
  };

  const addCartProduct = (evento) => {
    evento.preventDefault();
    if (!contador == 0) {
      let { id, name, image, price } = evento.target.elements;
      add(id.value, name.value, image.value, price.value, contador);
      contadorInit();
    } else {
      alert(
        "No es posible añadir un producto al carrito con una cantidad igual a cero"
      );
    }
  };

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
              <button
                className={StyleSushi.btn_icon}
                onClick={(evento) => {
                  evento.preventDefault();
                  contadorMinus();
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className={StyleSushi.span_amount}>{contador}</span>
              <button
                className={StyleSushi.btn_icon}
                onClick={(evento) => {
                  evento.preventDefault();
                  contadorPlus();
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </article>

            <form action="#" onSubmit={addCartProduct}>
              <input type="hidden" name="id" id="id" value={dato.id} />
              <input type="hidden" name="name" id="name" value={dato.name} />
              <input type="hidden" name="image" id="image" value={dato.img} />
              <input type="hidden" name="price" id="price" value={dato.price} />
              <button type="submit" id={StyleSushi.btn_add}>
                Agregar al carrito
              </button>
            </form>
          </article>
        ))}
      </section>
    </>
  );
};
export default Sushi;
