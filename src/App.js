import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.js';

function App() {
  return (
    <React.Fragment>
      <Route exact path={'/'}><Home/></Route>
    </React.Fragment>
  );
}

export default App;
