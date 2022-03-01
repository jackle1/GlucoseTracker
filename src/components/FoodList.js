import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Food } from './Food';

export const FoodList = () => {
    const { foods } = useContext(GlobalContext);

    return (
        <>
            <h3>List of Foods</h3>
            <ul className="list">
                {foods.map(food => (<Food key={food.id} food={food} />))}
            </ul>
        </>
    )
}
