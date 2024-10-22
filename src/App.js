import React from 'react';
import {Routes, Route} from 'react-router-dom';
import classes from './App.module.css';
import HomePage from './pages/HomePage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
  <div className={classes.App}>
    <Header/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
