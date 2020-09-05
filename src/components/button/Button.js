import React from 'react';
import './Button.sass';
import {useAppContext} from '../../context/AppContext';

const Button = ({children}) => {
  const {role, checkBoxes, currenSelected} = useAppContext();

  return (
    <button className="button" onClick={() => console.log(role, checkBoxes, currenSelected)}>
      {children}
    </button>
  );
};

export default Button;
