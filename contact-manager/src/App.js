import React, {Component} from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1>The App Component</h1>
      <Contact/>
      <Contact/>
      <Contact/>
    </div>
  );
}

export default App;
