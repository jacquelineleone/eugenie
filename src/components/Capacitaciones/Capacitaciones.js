import React from "react";
import './styles.css';
import Top from "../Top/Top";

//Assets
import computer from '../../assets/computer.png';
import searchIcon from '../../assets/Icon/searchIcon.png';

export default function Capacitaciones() {
    return (
        <div className="capacitaciones-container">
            <Top />
            <div className="capacitaciones-header-container">
                <div className="capacitaciones-informacion-general">
                    <p className="capacitaciones-informacion-general-title">CAPACITACIONES</p>
                    <img src={computer} className="capacitaciones-informacion-general-img"/>
                </div>
                <div className="capacitaciones-header-explicacion">
                    <div className="capacitaciones-header-explicacion-pregunta">
                        <p className="capacitaciones-header-explicacion-pregunta-text">¿Por qué brindamos capacitaciones?</p>
                        <img src={searchIcon} className="capacitaciones-header-explicacion-pregunta-searchIcon"/>
                    </div>
                    <div className="capacitaciones-header-explicacion-respuesta">
                        <p className="capacitaciones-header-explicacion-respuesta-text">
                            Creemos que capacitar es brindar las herramientas necesarias <b className="capacitaciones-header-explicacion-respuesta-highlight">para que cada mujer pueda</b> tomar sus propias decisiones, <b className="capacitaciones-header-explicacion-respuesta-highlight">manejar sus finanzas</b> de forma eficiente, <b className="capacitaciones-header-explicacion-respuesta-highlight">contribuyendo al desarrollo de sus metas<br/>y al liderazgo de sus vidas.</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}