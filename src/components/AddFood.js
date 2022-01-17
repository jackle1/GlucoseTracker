import React, {useState} from 'react'

export const AddFood = () => {
    const [text, setText] = useState(''); //create a piece of state and a function to manipulate it
    const [carbs, setCarbs] = useState(''); //default is 0

    return (
        <div>
            <h3>Add New Food Item</h3>
            <htmlForm id="htmlForm">
            <div className="htmlForm-control">
                <label htmlFor="text">Food Name</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
                //this will update whatever is being typed in
                placeholder="Enter name of food..." />
            </div>
            <div N="htmlForm-control">
                <label htmlFor="amount"
                >Grams of Carbohydrates</label>
                <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} 
                placeholder="Enter grams of carbs in listed food..." />
            </div>
            <button className="btn">Add food</button>
            </htmlForm>
        </div>
    )
}
