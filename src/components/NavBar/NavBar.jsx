import React from "react";
import './styles.css';
import { StyledLink } from "./NavBar.js";
import { Link } from "react-router-dom";

//Assets
import backgroundImage from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import header from '../../assets/hder.png'

export default function NavBar() {
    
    return (
        <div className="container">
            <div className='navegador'>
                <img src={logo} className='logo'/>
                <div className='links'>
                    <StyledLink to={'/SobreNosotras'}>Sobrenosotras</StyledLink>
                    <StyledLink to={'/Capacitaciones'}>Capacitaciones</StyledLink>
                    <StyledLink to={'/Creditos'}>Créditos</StyledLink>
                    <StyledLink to={'Incubadora'}>Incubadora</StyledLink>
                    <StyledLink to={'/Contacto'}>Contacto</StyledLink>
                </div>
            </div>
            <img src={backgroundImage} className='backgroundImage'/>
        </div>
    )
}