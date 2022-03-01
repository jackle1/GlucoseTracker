import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const CurrentLevel = () => {
    const { foods } = useContext(GlobalContext);
    const { startlevel } = useContext(GlobalContext);

    const amounts = foods.map(foods => foods.amount);
    const flux = startlevel.map(startlevel => startlevel.initial);

    const totalflux = amounts.reduce((acc, item) => (acc = acc + item * 0.1), 0).toFixed(2);

    const total = getSum(flux, totalflux);

    function getSum(num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    }

    return (
        <>
            <h4>Your Expected Glucose Level</h4>
            <h1>{total}mmol/L</h1>
        </>
    )
}
