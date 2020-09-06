import React from 'react';
import './Drop-down.sass';
import {useAppContext} from '../../store/context';
import {roles} from '../../config';

const DropDown = () => {
  const {toggleRole, role} = useAppContext();

  return (
    <div data-testid="dropdown" className="dropdown">
      <button className="dropdown__btn">{role}</button>
      <div className="dropdown__content">
        {roles.map((role) => (
          <div className="dropdown__item" key={role.id} onClick={() => toggleRole(role)}>
            {role.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
