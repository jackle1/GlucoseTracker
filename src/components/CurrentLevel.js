import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const CurrentLevel = () => {
    const { foods } = useContext(GlobalContext);

    const amounts = foods.map(foods => foods.amount);

    const total = amounts.reduce((acc, item) => (acc = acc + item * 0.1), 0).toFixed(2);

    return (
        <>
            <h4>Your Expected Glucose Level</h4>
            <h1>{total}mmol/L</h1>
        </>
    )
}
