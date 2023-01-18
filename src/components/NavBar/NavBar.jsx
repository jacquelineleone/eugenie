import React from "react";
import './styles.css';
import { StyledLink } from "./NavBar.js";

//Assets
import backgroundImage from '../../assets/menu.png';
import logo from '../../assets/logo.png';

export default function NavBar() {
    
    return (
        <div className="container">
            <div className='navegador'>
                <img src={logo} className='logo'/>
                <div className='links'>
                    <StyledLink to={'/SobreNosotras'}>Sobrenosotras</StyledLink>
                    <StyledLink to={'/Capacitaciones'}>Capacitaciones</StyledLink>
                    <StyledLink>Créditos</StyledLink>
                    <StyledLink>Incubadora</StyledLink>
                    <StyledLink>Contacto</StyledLink>
                </div>
            </div>
            <img src={backgroundImage} className='backgroundImage'/>
        </div>
    )
}