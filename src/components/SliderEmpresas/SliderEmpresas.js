import React, { useState } from "react";
import './styles.css';
import { motion } from 'framer-motion';

//Assets
import elemental from '../../assets/Empresas/elemental.png';
import blick from '../../assets/Empresas/blick.png';
import elEditor from '../../assets/Empresas/elEditor.png';
import trust from '../../assets/Empresas/trust.png';
import empresa from '../../assets/Empresas/empresa.png';
import grupo from '../../assets/Empresas/grupo.png';
import flexy from '../../assets/Empresas/flexy.png';

export default function SliderEmpresas() {

    return (
        <motion.div className="slider-empresas">
            <motion.div className="slider-inner-empresas" drag='x' dragConstraints={{ right: 0, left: -392}}>
                <motion.div className="item-empresas">
                    <img src={empresa} className="image-slider"/>
                </motion.div>
                <motion.div className="item-empresas">
                    <img src={trust} className="image-slider"/>
                </motion.div>
                <motion.div className="item-empresas">
                    <img src={blick} className="image-slider"/>
                </motion.div>
                <motion.div className="item-empresas">
                    <img src={elEditor} className="image-slider"/>
                </motion.div>
                <motion.div className="item-empresas">
                    <img src={grupo} className="image-slider"/>
                </motion.div>
                <motion.div className="item-empresas">
                    <img src={elemental} className="image-slider"/>
                </motion.div>
                <motion.div className="item-empresas">
                    <img src={flexy} className="image-slider"/>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}