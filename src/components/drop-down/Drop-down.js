import React from 'react';
import './Drop-down.sass';
import {useAppContext} from '../../context/AppContext';
import {roles} from '../../config';

const DropDown = () => {
  const {toggle, role} = useAppContext();

  return (
    <div className="dropdown">
      <button className="dropdown__btn">{role}</button>
      <div className="dropdown__content">
        {roles.map((role) => (
          <div className="dropdown__item" key={role.id} onClick={() => toggle(role)}>
            {role.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
