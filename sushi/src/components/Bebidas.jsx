import sushi_portada from "../assets/sushi_portada.png";
import StyleBebidas from "../styles/catalogo.module.css";
import BebidasContext from "../context/BebidasContext";
import { useContext, useState } from "react";
import CategoriaContext from "../context/CategoriaContext";
import CartContext from "../context/CartContext";
const Bebidas = () => {
  const bebidas = useContext(BebidasContext);
  const { categoria } = useContext(CategoriaContext);
  const { add } = useContext(CartContext);

  let [contador,setContador] = useState(0);

  const contadorPlus = () => {
    setContador(contador += 1);
  }
  const contadorMinus = () => {
    if(contador > 0){
      setContador(contador -= 1);
    }
  }

  const contadorInit = () => {
    setContador(0);
  }
  
  const addCartProduct = (evento) => {
    evento.preventDefault();
    if(!contador == 0){
      let { id, name, image, price } = evento.target.elements;
      add(id.value, name.value, image.value, price.value, contador);
      contadorInit();
    }else{
      alert('No es posible añadir un producto al carrito con una cantidad igual a cero');
    }

  }  

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
                <i className="fa-solid fa-minus" onClick={(evento) => {
                  evento.preventDefault();
                  contadorMinus();
                }}></i>
              </button>
              <span className={StyleBebidas.span_amount}>{contador}</span>
              <button className={StyleBebidas.btn_icon} onClick={(evento) => {
                  evento.preventDefault(); 
                  contadorPlus();
                }}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </article>


            <form action="#" onSubmit={addCartProduct}>

              <input type="hidden" name="id" id="id" value={dato.id} />
              <input type="hidden" name="name" id="name" value={dato.name}/>
              <input type="hidden" name="image" id="image" value={dato.image} />
              <input type="hidden" name="price" id="price" value={dato.price} />
            <button id={StyleBebidas.btn_add}>Agregar al carrito</button>
            </form>
            
          </article>
        ))}
      </section>
    </>
  );
};
export default Bebidas;
