import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Level } from './Level';

export const StartLevel = () => {
    const { startlevel } = useContext(GlobalContext);

    return (
        <>
            <h4>Your Initial Glucose Level</h4>
            <h1> {startlevel.map(startlevel => (<Level key={startlevel.id} startlevel={startlevel} />))}
            </h1>
        </>
    )
}
