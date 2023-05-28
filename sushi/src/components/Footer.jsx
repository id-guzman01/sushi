import StyleFooter from '../styles/footer.module.css'
import { useState } from 'react';

const Footer = () => {
    let [openIndex,selectIndex] = useState(1);

    const open = (index) => {
        (openIndex == index) ? null : selectIndex(openIndex = index);
    }

    return (<>
        <footer id={StyleFooter.pie_pagina}>

            <picture id={StyleFooter.content_img}>
                <img src="./logo.png" alt="Logo del restaurante" />
            </picture>

            <section id={StyleFooter.encuentranos}>
                <h2 className={StyleFooter.subtitulo_footer}>Encuentranos</h2>
                <p className={StyleFooter.encuentranos_footer}>10110 139 St Edmonton</p>
                <p className={StyleFooter.encuentranos_footer}>+1 5873461285</p>
                <p className={StyleFooter.encuentranos_footer}>info@zensushi.com</p>         
            </section>

            <nav id={StyleFooter.redes}>
                <a className={StyleFooter.btn_social} href="#" title="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                <a className={StyleFooter.btn_social} href="#" title="Instagram" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a className={StyleFooter.btn_social} href="#" title="Twitter" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            </nav>

            <section id={StyleFooter.informacion}>
                <h2 className={StyleFooter.subtitulo_footer}>Información importante</h2>
                <details className={StyleFooter.details_footer} onClick={(evento) => {
                    open(1);
                }} open={openIndex == 1}>
                    <summary className={StyleFooter.summary_footer}>Políticas de privacidad</summary>
                    <p className={StyleFooter.text_details_footer}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem itaque consequatur, ipsum excepturi esse dicta. Modi sed nihil distinctio laboriosam, totam beatae sequi perferendis, dolor vero fugit laudantium deserunt?</p>
                </details>

                <details className={StyleFooter.details_footer} onClick={(evento) => {
                    open(2);
                }} open={openIndex == 2}>
                    <summary className={StyleFooter.summary_footer}>Preguntas más frecuentes</summary>
                    <p className={StyleFooter.text_details_footer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi qui incidunt aspernatur praesentium dicta adipisci? Eius magnam ut ipsam, amet officiis explicabo ipsum sunt. Mollitia veritatis quis voluptate accusantium!</p>
                </details>

            </section>

            <p id={StyleFooter.derechos}><span id={StyleFooter.signo}>&copy;</span> 2023 - All Rights Reserved By Zen Sushi</p>

        </footer>
    </>);
}

export default Footer;