import React from 'react';
import { Header } from './components/Header';
import { StartLevel } from './components/StartLevel';
import { CurrentLevel } from './components/CurrentLevel';
import { Foods } from './components/Foods';
import { FoodList } from './components/FoodList';
import { AddFood } from './components/AddFood';
import './App.css';
import { StartInput } from './components/StartInput';

function App() {
  return (
    <div>
      <center> 
      <div>
          <Header />
      </div>
      <div className="containerleft">
        <StartLevel />
      </div>
      <div className="containerright">
        <CurrentLevel />
      </div>
      </center> 
      <Foods />
      <FoodList />
      <AddFood />
      <StartInput />
    </div>
  );
}

export default App;
