import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { Header } from './components/Header';
import { Task1 } from './components/Task1';
import { Task2 } from './components/Task2';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path={"/task1"} component={Task1}/>
          <Route path={"/task2"} component={Task2}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
