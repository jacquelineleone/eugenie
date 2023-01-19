import React from "react";
import './styles.css';
import Top from "../Top/Top";

//Assets
import amarillo from "../../assets/amarillo.png";
import logo from "../../assets/logoAbout.png";
import recurso from "../../assets/recurso.png";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";
import grey from "../../assets/grey.png";
import nosotras from "../../assets/nosotras.png";

export default function About() {
    return (
        <div className="about-container">
            <Top />
            <div className="about-amarillo-container">
                <img src={recurso} className="about-amarillo-recurso"/>
                <img src={logo} className="about-amarillo-logo"/>
                <p className="about-amarillo-text">Nos distinguimos por brindar a quienes nos eligen las herramientas necesarias para gestionar exitosamente sus objetivos.</p>
                <img src={amarillo} className="about-amarillo-img"/>
            </div>
            <div className="about-valores-container">
                <div className="about-valores-information">
                    <div className="about-valores-item-first">
                        <div className="valores-item-title-encabezado">
                            <img src={item1} style={{zIndex: 90}}/>
                            <div className="valores-item-title-div">
                                <p className="valores-item-title">Visión</p>
                            </div>
                        </div>
                        <p className="valores-item-description">
                            Nacemos con el objetivo de romper los esquemas tradicionales buscando eliminar la brecha en el acceso al financiamiento y la educación financiera que limita a las mujeres a la hora de emprender o gestionar un negocio.
                            Nuestra visión es un sistema financiero más equitativo, donde las mujeres tengan una mejor relación con el dinero, las inversiones y los negocios.
                        </p>
                    </div>
                    <div className="about-valores-item">
                        <div className="valores-item-title-encabezado">
                            <img src={item2} style={{zIndex: 90}}/>
                            <div className="valores-item-title-div">
                                <p className="valores-item-title">Misión</p>
                            </div>
                        </div>
                        <p className="valores-item-description">
                            Nuestra misión es acompañar a cada mujer a crecer y financiar sus proyectos, además de brindarles los conocimientos y herramientas necesarias para que puedan lograr su independencia financiera y alcanzar todo lo que se propongan.
                        </p>
                    </div>
                    <div className="about-valores-item">
                        <div className="valores-item-title-encabezado">
                            <img src={item3} style={{zIndex: 90}}/>
                            <div className="valores-item-title-div">
                                <p className="valores-item-title">Valor</p>
                            </div>
                        </div>
                        <p className="valores-item-description">
                            Somos una empresa que refleja los valores de la igualdad, que fomenta el progreso por el género femenino, generando una gran comunidad de mujeres que acompañan a otras brindando seguridad, progreso y oportunidades.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-valores-hashtag">
                <img src={nosotras}/>
                <p className="valores-hashtag-text">#PoryPara<b className="valores-hashtag-text-highlight">Mujeres</b></p>
                <img src={grey} className="valores-hashtag-grey"/>
            </div>
        </div>
    )
}