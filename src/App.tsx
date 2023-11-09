//import React from 'react';
//import logo from './logo.svg';
import './App.css';
//const glpi = 'http://www.santacasademaceio.com.br';

const open = (_url: string) => {
  window.open(_url, '_blank', 'noopener');
}

const getUrl = (app: string) => {
  switch (app) {
    case 'GLPI': return 'http://www.santacasademaceio.com.br';
    case 'Google': return 'http://www.google.com';
    default: return 'http://localhost:3000';
  }
}

function App() {
  return (
    <div className="App">
      <button onClick={
        () => window.open('https://www.js-craft.io/', '_blank', 'noopener')
      }>
        Go to JS Craft
      </button>

      <button onClick={ () => open(getUrl('GLPI')) }> GLPI </button>


    </div>
  );
}

export default App;
