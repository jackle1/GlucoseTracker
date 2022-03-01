import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Food = ({ food }) => {
  const { deleteFood } = useContext(GlobalContext);

  return (
    <li className="fooditem">
      {food.text} <span>{food.amount}g</span><button onClick={() => deleteFood(food.id)} className="delete-btn">x</button>
    </li>
  )
}