import Style from "../styles/login.module.css";
import image_sushi from "../assets/sushi_register.jpg";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = ({ children }) => {
  const { user, userError, login, usuarios, userSuccess, userLog, logOut } =
    useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
    login(email.value, password.value);
  };

  const { auth, setAuth } = useContext(AuthContext);
  if (!auth || auth != "login") {
    return null;
  }

  return (
    <>
      <main id={Style.fondo}>
        <section id={Style.ventana}>
          <picture id={Style.picture_login}>
            <img src={image_sushi} alt="Imagen de sushi" />
          </picture>
          <h1 id={Style.title_login}>Login</h1>
          <article id={Style.article_login}>
            <form onSubmit={handleSubmit}>
              <fieldset className={Style.row_form_login}>
                <label className={Style.label_form_login} htmlFor="email">
                  Email:*
                </label>
                <input
                  className={Style.text_form_login}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </fieldset>
              <fieldset className={Style.row_form_login}>
                <label className={Style.label_form_login} htmlFor="email">
                  Password:*
                </label>
                <input
                  className={Style.text_form_login}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  required
                />
              </fieldset>
              <fieldset id={Style.row_button_form_login}>
                <button id={Style.btn_accept_form_login} type="submit">
                  Iniciar Sesion
                </button>
                <button
                  id={Style.btn_cancel_form_login}
                  onClick={(evento) => {
                    evento.preventDefault();
                    setAuth(null);
                  }}
                >
                  Cerrar
                </button>
                {children}
              </fieldset>
            </form>
          </article>
        </section>
      </main>
    </>
  );
};

export default Login;
