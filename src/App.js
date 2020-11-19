import React from 'react';
import logo from './logo.svg';
import { Header } from './components/Header';
import { Task1 } from './components/Task1';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Task1 />
      </main>
    </div>
  );
}

export default App;
