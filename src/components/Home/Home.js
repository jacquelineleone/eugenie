import React from "react";
import './styles.css';

//Assets
import header from '../../assets/hder.png';
import yellow from '../../assets/yellow.png';
import searchIcon from '../../assets/Icon/searchIcon.png'

export default function Home() {
    return (
        <div className='container'>
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
                <img src={yellow} className="PorQueElegirEugenie"/>
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