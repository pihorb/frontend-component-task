import React from 'react';
import './Button.sass';
import {useAppContext} from '../../context/AppContext';

const Button = ({children}) => {
  const {role, checkBoxes, lastChoice} = useAppContext();
  const state = {
    currnetRole: role,
    lastSelected: lastChoice,
    ...checkBoxes
  };

  return (
    <button className="button" onClick={() => console.log(state)}>
      {children}
    </button>
  );
};

export default Button;
