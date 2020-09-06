import React from 'react';
import './Button.sass';
import {useAppContext} from '../../store/context';

const Button = ({children}) => {
  const {role, slots, lastChoice} = useAppContext();
  const state = {
    currnetRole: role,
    lastSelected: lastChoice,
    ...slots
  };

  return (
    <button data-testid="btn" className="button" onClick={() => console.log(state)}>
      {children}
    </button>
  );
};

export default Button;
