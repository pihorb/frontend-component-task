import React from 'react';
import './Check-box.sass';
import check from '../../materials/check.svg';
import unChecked from '../../materials/uncheck.svg';
import {useAppContext} from '../../context/AppContext';

const CheckBox = ({name, path}) => {
  const {checkBoxes, role, updateCheckBoxes} = useAppContext();
  const isChecked = checkBoxes[path].includes(name);

  const styles = {
    opacity: 0.5,
    poineterEvents: 'none'
  };

  return (
    <div
      className="check-box"
      style={role !== 'custom' ? styles : {}}
      onClick={() => updateCheckBoxes(name, path, isChecked)}
    >
      <img className="check-box__img" src={isChecked ? check : unChecked} alt="check" />
      <span className="check-box__name">{name}</span>
    </div>
  );
};

export default CheckBox;
