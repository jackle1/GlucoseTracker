import React from 'react'

export const FoodList = () => {
    return (
        <>
            <h3>List of Foods</h3>
            <ul className="list">
                <li className="minus">
                    Bread <span>6g</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </>
    )
}
