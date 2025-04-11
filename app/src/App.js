/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Some fun little changes</h1>
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Przykładowe komponenty
function Home() {
  return <h2>Strona główna</h2>;
}

function Jazdy() {
  return <h2>Podstrona: Jazdy</h2>;
}

function App() {
  return (
    <div className="App">
    <Router>
      <div className="p-4">
        <nav className="mb-4 space-x-4">
          <Link to="/">Home</Link>
          <Link to="/jazdy">Jazdy</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jazdy" element={<Jazdy />} />
        </Routes>
      </div>
    </Router>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <h1>
    Hello world!2
  </h1>
  </div>
  );
}

export default App;