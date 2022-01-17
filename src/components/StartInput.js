import React, {useState} from 'react'

export const StartInput = () => {
    const [initial, setInitial] = useState('');

    return (
        <div>
            <h3>Set Initial Blood Sugar Level</h3>
            <htmlForm id="htmlForm">
            <div className="htmlForm-control">
                <input type="text" value={initial} onChange={(e) => setInitial(e.target.value)} 
                placeholder="Enter initial blood sugar level..." />
            </div>
            <button className="btn">Set initial</button>
            </htmlForm>
        </div>
    )
}
