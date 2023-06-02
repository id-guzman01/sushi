import Style from "../styles/register.module.css";
import image_sushi from "../assets/sushi_register.jpg";
import RegistroContext from "../context/RegistroContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const Register = () => {
  const { registrarse, resultado } = useContext(RegistroContext);

  const enviar = (evento) => {
    evento.preventDefault();
    const { name, email, password } = evento.target.elements;
    registrarse(name.value, email.value, password.value);
  };
  const { auth, setAuth } = useContext(AuthContext);
  if (!auth || auth != "register") {
    return null;
  }

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
                <label className={Style.label_form_register} htmlFor="name">
                  Nombre:*
                </label>
                <input
                  className={Style.text_form_register}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre Completo"
                  required
                />
              </fieldset>
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
                <button
                  id={Style.btn_cancel_form_register}
                  onClick={() => {
                    setAuth(null);
                  }}
                >
                  Cerrar
                </button>
              </fieldset>
            </form>
          </article>
        </section>
      </main>
    </>
  );
};

export default Register;
