import React from 'react';
import CheckBoxes from './components/check-boxes';
import DropDown from './components/drop-down';
import Button from './components/button';
import './index.sass';
import {AppProvider} from './store/context';

const App = () => {
  return (
    <AppProvider>
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
        <div className="container__modifier">
          <Button>Save</Button>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
