import './App.css';
import React from 'react';
import { Landing } from './pages/Landing';

function App() {
  return (
    <div >
      <p>My Token = {window.token}</p>
      <Landing />
    </div>
  );
}

export default App;
