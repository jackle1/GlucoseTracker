import React from 'react';
import { Header } from './components/Header';
import { StartLevel } from './components/StartLevel';
import { CurrentLevel } from './components/CurrentLevel';
import { BloodSugar } from './components/BloodSugar';
import { FoodList } from './components/FoodList';
import { AddFood } from './components/AddFood';
import { StartInput } from './components/StartInput';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
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
      <BloodSugar />
      <FoodList />
      <AddFood />
      <StartInput />
    </div>
    </GlobalProvider>
  );
}

export default App;
