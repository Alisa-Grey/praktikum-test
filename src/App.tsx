import React from 'react';
import Header from './components/Header';
import Selfie from './components/Selfie';
import About from './components/About';
import Contacts from './components/Contacts';
import Tutorial from './components/Tutorial';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="container">
        <h1 className='heading'>Алиса Сергеевна Терлицкая</h1>
        <p className="text--large">Привет! Меня зовут Алиса, я - фронтенд-разработчица в Heapp Games и кандидатка в наставники Яндекс.Практикума</p>
        <Selfie />
        <About />
        <Contacts />
        <Tutorial />
      </div>
    </div>
  );
}

export default App;
