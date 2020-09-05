import React from 'react';
import './Check-boxes.sass';
import {ckeckBoxes as list} from '../../config/';
import CheckBox from '../check-box';

const CheckBoxes = ({path}) => {
  return (
    <div className="check-boxes">
      <div className="check-boxes__title">{path}</div>
      <div className="check-boxes__list">
        {list.map((item) => (
          <CheckBox key={item.id + item.name} name={item.name} path={path} />
        ))}
      </div>
    </div>
  );
};

export default CheckBoxes;
