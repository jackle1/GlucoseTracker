import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Level = ({ startlevel }) => {
  return (
    <>{startlevel.initial}mmol/L</>
  )
}
