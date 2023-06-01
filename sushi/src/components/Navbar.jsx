import React, {useState} from 'react';
import StyleNav from '../styles/navbar.module.css';
import Logo from '../assets/logo_zen_sushi.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  let handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
<article className={StyleNav.opciones}>
        <img className={StyleNav.Logo} src={Logo} />
        <a href="#" className={StyleNav.Nav_Enlace} onClick={handleMenuClick}>
          Menu
        </a>
        <a href="#" className={StyleNav.Nav_Enlace}>
          Inicio
        </a>
        <a href="#" className={StyleNav.Nav_Enlace}> Login </a>
        <a href="#" className={StyleNav.Nav_Enlace}> Registro </a>

        <a href="#" className={StyleNav.Nav_Enlace}> logout </a>
      </article>
      <input type="checkbox" className={StyleNav.Nav_input} name="" id={StyleNav.check} checked />
      <article className={`${StyleNav.container} ${isMenuOpen ? StyleNav.open : ''}`}>
        <section className={StyleNav.menu}>Zen Sushi</section>
        <ol>
          <li>
            <a href="#">
              <i className="">Platos principales</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="">Bebidas</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="">Postres</i>
            </a>
          </li>
        </ol>
      </article>
        
    </header>
  );
};
export default Navbar