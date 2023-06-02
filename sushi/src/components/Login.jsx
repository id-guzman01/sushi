import Style from "../styles/login.module.css";
import UserContext from "../context/UserContext";
import image_sushi from "../assets/sushi_register.jpg";
import { useContext } from "react";

const Login = () => {
  const { registrarse, resultado } = useContext(UserContext);

  const enviar = (evento) => {
    evento.preventDefault();
    const { name, email, password } = evento.target.elements;
    registrarse(name.value, email.value, password.value);
    if (resultado == "El correo ya existe") {
      alert("El correo ya existe");
    } else if (resultado == "usuario registrado con exito") {
      alert("usuario registrado con exito");
    }
  };
  return (
    <>
      <main id={Style.fondo}>
        <section id={Style.ventana}>
          <picture id={Style.picture_register}>
            <img src={image_sushi} alt="Imagen de sushi" />
          </picture>
          <h1 id={Style.title_register}>Registrate</h1>
          <article id={Style.article_register}>
            <h2 id={Style.title_article_register}>Formulario de Registro</h2>
            <p id={Style.text_article_register}>
              Para completar el registro con éxito debe llenar el siguiente
              formulario
            </p>
            <form action="#" onSubmit={enviar}>
              <fieldset className={Style.row_form_register}>
                <label className={Style.label_form_register} htmlFor="email">
                  Email:*
                </label>
                <input
                  className={Style.text_form_register}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </fieldset>
              <fieldset className={Style.row_form_register}>
                <label className={Style.label_form_register} htmlFor="email">
                  Password:*
                </label>
                <input
                  className={Style.text_form_register}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  required
                />
              </fieldset>
              <fieldset className={Style.row_form_register}>
                <input
                  type="checkbox"
                  name="terminos"
                  id={Style.input_terminos_form_register}
                  required
                />
                <label className={Style.label_form_register} htmlFor="terminos">
                  Acepto los{" "}
                  <a href="#" target="_blank" title="Terminos y Condicionaes">
                    Terminos y condiciones
                  </a>
                </label>
              </fieldset>
              <fieldset id={Style.row_button_form_register}>
                <button id={Style.btn_accept_form_register} type="submit">
                  Registrate
                </button>
              </fieldset>
            </form>
          </article>
        </section>
      </main>
    </>
  );
};

export default Login;
