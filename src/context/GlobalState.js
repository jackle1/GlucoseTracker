import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  foods: [
    { id: 1, text: 'Rice', amount: 45 },
    { id: 2, text: 'Banana', amount: 16 },
    { id: 3, text: 'Egg', amount: 1.5 },
    { id: 4, text: 'Bacon', amount: 1.4 }
  ],
  startlevel: [
    { id: 1, initial: 0.00 }
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteFood(id) {
    dispatch({
      type: 'DELETE_FOOD',
      payload: id
    });
  }

  function addFood(food) {
    dispatch({
      type: 'ADD_FOOD',
      payload: food
    });
  }

  function setInput(level) {
    dispatch({
      type: 'SET_INPUT',
      payload: level
    });
  }

  return (<GlobalContext.Provider value={{
    foods: state.foods,
    startlevel: state.startlevel,
    deleteFood,
    addFood,
    setInput
  }}>
    {children}
  </GlobalContext.Provider>);
}