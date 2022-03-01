import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddFood = () => {
    const [text, setText] = useState(''); //create a piece of state and a function to manipulate it
    const [amount, setAmount] = useState(''); //default is empty

    const { addFood } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

      const newFood = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addFood(newFood);
    }

    return (
        <div>
            <h3>Add New Food Item</h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Food Name</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
                //this will update whatever is being typed in
                placeholder="Enter name of food..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                >Grams of Carbohydrates</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
                placeholder="Enter grams of carbs in listed food..." />
            </div>
            <button className="btn">Add food</button>
            </form>
        </div>
    )
}
