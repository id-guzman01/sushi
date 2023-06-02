import sushi_portada from "../assets/sushi_portada.png";
import StylePostres from "../styles/catalogo.module.css";
import PostresContext from "../context/PostresContext";
import { useContext, useState } from "react";
import CategoriaContext from "../context/CategoriaContext";
import CartContext from "../context/CartContext";
const Postres = () => {
  const postres = useContext(PostresContext);
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

  if (!categoria || categoria != "postres") {
    return null;
  }
  return (
    <>
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
              <button
                className={StylePostres.btn_icon}
                onClick={(evento) => {
                  evento.preventDefault();
                  contadorMinus();
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className={StylePostres.span_amount}>{contador}</span>
              <button
                className={StylePostres.btn_icon}
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
              <input type="hidden" name="image" id="image" value={dato.image} />
              <input type="hidden" name="price" id="price" value={dato.price} />
              <button id={StylePostres.btn_add}>Agregar al carrito</button>
            </form>
          </article>
        ))}
      </section>
    </>
  );
};
export default Postres;
