import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

//Assets
import background from '../../assets/menu.png';
import logo from '../../assets/logo.png';

export default function Top() {
    return (
        <div className="top-container">
            <div className="top-navegator">
                <img src={logo} className="top-navegator-logo"/>
                <a href="/SobreNosotras" className="top-navigation-a">Sobre nosotras</a>
                    <div className="top-navigation-link">
                    <Link to={'/SobreNosotras'} className="prueba">Sobre nosotras</Link>
                    <Link to={'/Capacitaciones'} className="top-link-first">Capacitaciones</Link>
                    <Link to={'/'} className="top-link">Créditos</Link>
                    <Link to={'/'} className="top-link">Incubadora</Link>
                    <Link to={'/'} className="top-link">Contacto</Link>
                    </div>
            </div>
            <img src={background} className="top-background"/>
        </div>
    )
}