import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';

//Assets
import background from '../../assets/footer.png';
import facebook from '../../assets/Icon/face.png';
import instagram from '../../assets/Icon/ig.png';
import linkdn from '../../assets/Icon/lk.png';

export default function Footer() {
    return (
        <div className="container-footer">
            <div className="data-footer">
                <div className="footer-navigation">
                    <a href="/SobreNosotras" className="footer-navigation-a">Sobre nosotras</a>
                    <div className="footer-navigation-link">
                    <Link to={'/SobreNosotras'} className="prueba">Sobre nosotras</Link>
                    <Link to={'/Capacitaciones'} className="footer-link">Capacitaciones</Link>
                    <Link to={'/'} className="footer-link">Créditos</Link>
                    <Link to={'/'} className="footer-link">Incubadora</Link>
                    <Link to={'/'} className="footer-link">Contacto</Link>
                    </div>
                    <div className="footer-separation"></div>
                </div>
                <div className="footer-information">
                    <p className="footer-text"><b className="footer-highlight-max">Eugénie</b> es una empresa de <b>Grupo DelSud</b></p>
                    <div className="footer-contact">
                        <a href="https://www.instagram.com/eugenie.microcreditos/"><img src={instagram}/></a>
                        <a href="https://www.linkedin.com/company/eugenie-microcreditos/"><img src={linkdn}/></a>
                        <a href="https://www.facebook.com/eugenie.microcreditos"><img src={facebook}/></a>
                    </div>
                    <p className="footer-text">Copyright © 2023 <b className="footer-highlight">Grupo DelSud</b></p>
                </div>
            </div>
            <img src={background} className="footer-background"/>
        </div>
    )
}