import React from "react";
import './styles.css';
import Top from "../Top/Top";
import Footer from "../Footer/Footer"

//Assets
import computer from '../../assets/computer.png';
import searchIcon from '../../assets/Icon/searchIcon.png';
import finanzasPersonales from '../../assets/finanzasPersonales.png';
import marketingDigital from '../../assets/marketingDigital.png';
import marketingEmprendedores from '../../assets/marketingEmprendedores.png';
import recorte from '../../assets/recorte.png';

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
                <div className="capacitaciones-recorte">
                    <p className="capacitaciones-recorte-title">NUESTRAS CAPACITACIONES</p>
                    <img src={recorte} className="capacitaciones-recorte-img"/>
                </div>
                <div className="capacitaciones-tarjetas-container">
                    <div className="capacitaciones-tarjeta-div">
                        <img src={marketingDigital} className="capacitaciones-tarjeta-img"/>
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                            <p className="capacitaciones-tarjeta-title">marketing digital</p>
                            <p className="capacitaciones-tarjeta-description">
                            Aprendé a usar WIX para garantizar
                            tu presencia completa en 
                            las redes. Crea tu web gratis.
                            </p>
                        </div>
                        <div className="capacitaciones-tarjeta-button">
                            <p className="capacitaciones-tarjeta-button-text">LA QUIERO</p>
                        </div>
                    </div>
                    <div className="capacitaciones-tarjeta-div">
                        <img src={finanzasPersonales} className="capacitaciones-tarjeta-img"/>
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                            <p className="capacitaciones-tarjeta-title">finanzas Personales</p>
                            <p className="capacitaciones-tarjeta-description">              
                            Gestión del tiempo
                            </p>
                        </div>
                        <div className="capacitaciones-tarjeta-button">
                            <p className="capacitaciones-tarjeta-button-text">LA QUIERO</p>
                        </div>
                    </div>
                    <div className="capacitaciones-tarjeta-div">
                        <img src={marketingEmprendedores} className="capacitaciones-tarjeta-img"/>
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                            <p className="capacitaciones-tarjeta-title">marketing para emprendedoras</p>
                            <p className="capacitaciones-tarjeta-description">                        
                            ¿Por qué y cómo emprender?    
                            </p>
                        </div>
                        <div className="capacitaciones-tarjeta-button">
                            <p className="capacitaciones-tarjeta-button-text">LA QUIERO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="capacitaciones-footer-container">
                <Footer />
            </div>
        </div>
    )
}