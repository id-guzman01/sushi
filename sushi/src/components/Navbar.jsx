import { useState, useContext } from "react";
import StyleNav from "../styles/navbar.module.css";
import Logo from "../assets/logo_zen_sushi.png";
import UserContext from "../context/UserContext";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userLog, logOut } = useContext(UserContext);
  const [menuLogin, setMenuLogin] = useState(false);

  const closedLogin = (event) => {
    event.preventDefault();
    logOut();
  };

  let handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { setAuth } = useContext(AuthContext);
  return (
    <header>
      <section className={StyleNav.header}>
        <picture>
          <img className={StyleNav.Logo} src={Logo} alt="Logo_ZenSushi" />
        </picture>
        <nav className={StyleNav.opciones}>
          <a href="#" className={StyleNav.Nav_Enlace} onClick={handleMenuClick}>
            {" "}
            Menu{" "}
          </a>
          <a href="#" className={StyleNav.Nav_Enlace}>
            {" "}
            Inicio{" "}
          </a>
          {!userLog && (
            <a
              href="#"
              className={StyleNav.Nav_Enlace}
              onClick={() => {
                setAuth("register");
              }}
            >
              {" "}
              Registro{" "}
            </a>
          )}
          {!userLog && (
            <a
              href="#"
              className={StyleNav.Nav_Enlace}
              onClick={() => {
                setAuth("login");
              }}
            >
              {" "}
              Login{" "}
            </a>
          )}
          {userLog && (
            <a href="#" className={StyleNav.Nav_Enlace} onClick={closedLogin}>
              {" "}
              logout{" "}
            </a>
          )}
        </nav>
      </section>
      <input
        type="checkbox"
        className={StyleNav.Nav_input}
        name=""
        id={StyleNav.check}
        checked
      />

      <section
        className={`${StyleNav.container} ${isMenuOpen ? StyleNav.open : ""}`}
      >
        <h1 className={StyleNav.h1nav}>Zen Sushi</h1>
        <nav className={StyleNav.menu}>
          <a href="#" className={StyleNav.continerA}>
            {" "}
            Platos principales{" "}
          </a>
          <a href="#" className={StyleNav.continerA}>
            {" "}
            Bebidas{" "}
          </a>
          <a href="#" className={StyleNav.continerA}>
            {" "}
            Postres{" "}
          </a>
        </nav>
      </section>
    </header>
  );
};
export default Navbar;
