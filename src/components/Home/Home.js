import React from "react";
import './styles.css';

//Assets
import header from '../../assets/hder.png';
import yellow from '../../assets/yellow.png';
import searchIcon from '../../assets/Icon/searchIcon.png';
import recorte from '../../assets/recorte.png'

export default function Home() {
    return (
        <div className='container'>
            <div className="recorte-container">
                <p className="recorte-text">
                    APOYAMOS A <b className="recorte-highlight">MUJERES</b> QUE <b className="recorte-highlight">SUEÑAN</b>,
                    <br/><b className="recorte-highlight">PROYECTAN</b> Y BUSCAN <b className="recorte-highlight">CRECER</b>.
                </p>
                <div className="recorte-buttons">
                    <div className="button">
                        <p className="button-p-1">Solicitar mi crédito</p>
                    </div>
                    <div className="button">
                        <p className="button-p-2">Potenciar mi proyecto</p>
                    </div>
                </div>
                <img src={recorte}/>
            </div>
            <div className="yellow-container">
                <div className="yellow-response">
                    <p className="yellow-response-p">
                    Porque <b className="response-highlight">somos una comunidad de mujeres reales</b> que
                    conocen las dificultades a las que te enfrentas a la hora
                    de cumplir tus objetivos personales y profesionales.
                    <br/>Por eso <b>elegimos acompañar a cada mujer poniendo
                    a disposición las herramientas que necesite.</b>
                    </p>
                </div>
                <div className="yellow-question">
                    <p className="yellow-question-p">¿Por qué elegir Eugénie?</p>
                    <img src={searchIcon} className='searchIcon'/>
                </div>
                <img src={yellow}/>
            </div>
            <div className="header-container">
                <img src={header} className='Header'/>
                <div className="Text1">
                    <p className="TenemosLoNecesario">Tenemos lo necesario para que</p>
                    <p className="AlcancesTusObjetivos">alcances tus objetivos</p>
                </div>
                <h1 className="AnimateASaltar">ANIMATE A SALTAR</h1>
            </div>
        </div>
    )
}