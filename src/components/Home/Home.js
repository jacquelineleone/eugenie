import React from "react";
import './styles.css';

//Assets
import header from '../../assets/hder.png'

export default function Home() {
    return (
        <div className='container'>
            <img src={header} className='Header'/>
            <div className="Text1">
                <p className="TenemosLoNecesario">Tenemos lo necesario para que</p>
                <p className="AlcancesTusObjetivos">alcances tus objetivos</p>
            </div>
            <h1 className="AnimateASaltar">ANIMATE A SALTAR</h1>
        </div>
    )
}