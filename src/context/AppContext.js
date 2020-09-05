import React, {createContext, useContext, useReducer} from 'react';
import reducer from '../reducers/reducer';
import {ADD_FOLDERS, ADD_GEMS, REMOVE_FOLDERS, REMOVE_GEMS} from '../reducers/types';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const setCheckBoxes = (...opts) => {
  const min = ['view', 'share'];

  if (opts) min.push(...opts);

  return min;
};

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {
    role: 'user',
    lastChoice: null,
    checkBoxes: {
      gems: setCheckBoxes('create', 'update'),
      folders: setCheckBoxes('create', 'update')
    }
  });

  const setActiveRole = (role) => {
    dispatch({type: role.name.toUpperCase()});
  };

  const updateCheckBoxes = (name, path, isChecked) => {
    switch (true) {
      case isChecked && path === 'gems':
        return dispatch({type: REMOVE_GEMS, payload: name});
      case isChecked && path === 'folders':
        return dispatch({type: REMOVE_FOLDERS, payload: name});
      case path === 'folders':
        return dispatch({type: ADD_FOLDERS, payload: name});
      case path === 'gems':
        return dispatch({type: ADD_GEMS, payload: name});
      default:
        return null;
    }
  };

  return (
    <AppContext.Provider
      value={{
        toggle: setActiveRole,
        updateCheckBoxes,
        role: state.role,
        checkBoxes: state.checkBoxes,
        lastChoice: state.lastChoice
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
