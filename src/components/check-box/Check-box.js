import React from 'react';
import './Check-box.sass';
import check from '../../materials/check.svg';
import unChecked from '../../materials/uncheck.svg';
import {useAppContext} from '../../store/context';

const CheckBox = ({name, path}) => {
  const {slots, role, toggleSelect} = useAppContext();
  const isChecked = !slots[path] ? false : slots[path].includes(name);

  const styles = {
    opacity: 0.5,
    pointerEvents: 'none'
  };

  return (
    <div
      className="check-box"
      data-testid="check-box"
      style={role !== 'custom' ? styles : {}}
      onClick={() => toggleSelect(name, path, isChecked)}
    >
      <img
        className="check-box__img"
        src={isChecked ? check : unChecked}
        alt={isChecked ? 'checked' : 'empty'}
      />
      <span className="check-box__name">{name}</span>
    </div>
  );
};

export default CheckBox;
