import React from 'react';
import CheckBoxes from './components/check-boxes';
import DropDown from './components/drop-down';
import './index.sass';

const App = () => {
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__dropdown">
          <span className="container__title">User role:</span>
          <DropDown />
        </div>
        <CheckBoxes path="folders" />
        <hr />
        <CheckBoxes path="gems" />
      </div>
    </div>
  );
};

export default App;
