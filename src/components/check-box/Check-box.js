import React from 'react';
import './Check-box.sass';
import check from '../../materials/check.svg';

const CheckBox = () => {
  return (
    <div className="check-box">
      <img className="check-box__img" src={check} alt="check" />
      <span className="check-box__name">CheckBox</span>
    </div>
  );
};

export default CheckBox;
