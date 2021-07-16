import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Slides } from './components/Slides';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Slides />
    </div>
  );
}

export default App;
