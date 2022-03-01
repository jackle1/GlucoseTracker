import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const StartInput = () => {
    const [initial, setInitial] = useState('');

    const { setInput } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
  
        const level = {
            id: Math.floor(Math.random() * 100000000),
            initial: +initial
        }
  
        setInput(level);
    }

    return (
        <div>
            <h3>Set Initial Blood Sugar Level</h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <input type="text" value={initial} onChange={(e) => setInitial(e.target.value)} 
                placeholder="Enter initial blood sugar level..." />
            </div>
            <button className="btn">Set initial</button>
            </form>
        </div>
    )
}
