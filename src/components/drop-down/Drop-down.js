import React from 'react';
import './Drop-down.sass';
import {roles} from '../../config';

const DropDown = () => {
  return (
    <div className="dropdown">
      <button className="dropdown__btn">role</button>
      <div className="dropdown__content">
        {roles.map((role) => (
          <div className="dropdown__item" key={role.id}>
            {role.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
