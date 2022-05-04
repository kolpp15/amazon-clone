import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    // BEM
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
