import './App.css'
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Account from './components/Account';


const App = () => {
  return (
    <Router>
    <div>
    <NavBar />
    
    </div>
    </Router>
  )
}

export default App
