import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const BloodSugar = () => {
    const { foods } = useContext(GlobalContext);

    const amounts = foods.map(foods => foods.amount);

    const total = amounts.reduce((acc, item) => (acc += item * 0.1), 0).toFixed(2);
    //const total = 1.0;

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Target</h4>
          <p className="level target">7.8mmol/L</p>
        </div>
        <div>
          <h4>Fluctuation</h4>
          <p className={total > 3.20 ? "level change": "level target"}>{total}mmol/L</p>
        </div>
      </div>
    )
}


