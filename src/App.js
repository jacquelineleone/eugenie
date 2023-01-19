import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Capacitaciones from './components/Capacitaciones/Capacitaciones.js';

function App() {
  return (
    <React.Fragment>
      <Route exact path={'/'}><Home/></Route>
      <Route path={'/SobreNosotras'}><About/></Route>
      <Route path={'/Capacitaciones'}><Capacitaciones/></Route>
    </React.Fragment>
  );
}

export default App;
