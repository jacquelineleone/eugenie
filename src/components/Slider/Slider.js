import React, { useState } from "react";
import './styles.css';
import { motion } from 'framer-motion'

export default function Slider() {

    return (
        <motion.div className="slider">
            <motion.div className="slider-inner" drag='x' dragConstraints={{ right: 0, left: -720 }}>
                <motion.div className="item">
                    <p className="item-title">Gladys Stella Galván</p>
                    <div className="item-separation"></div>
                    <p className="item-description">
                        "En Eugénie fueron muy cordiales
                        siempre. Gracias porque existen
                        y porque nos dan una
                        mano a las emprendedoras"
                    </p>
                    <p className="item-rol">EMPRENDEDORA</p>
                </motion.div>
                <motion.div className="item">
                    <p className="item-title">Valery Ocampo</p>
                    <div className="item-separation"></div>
                    <p className="item-description">
                    “Me encantó, te dan el crédito
                    en tiempo y forma, rápido.
                    A mi me sirvió de mucho, gracias!!!”
                    </p>
                    <p className="item-rol">EMPRENDEDORA</p>
                </motion.div>
                <motion.div className="item">
                    <p className="item-title">Patricia Guttman</p>
                    <div className="item-separation"></div>
                    <p className="item-description">
                    “Gracias a Eugénie pude 
                    comenzar mi emprendimiento.
                    La atención fue más que buena,
                    y destaco la rapidez en la 
                    entrega del crédito. 
                    Lo recomiendo”
                    </p>
                    <p className="item-rol">EMPRENDEDORA</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}