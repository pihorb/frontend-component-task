import React, {createContext, useContext, useReducer} from 'react';
import reducer from '../reducers/reducer';

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
    checkBoxes: {
      gems: setCheckBoxes('create', 'update'),
      folders: setCheckBoxes('create', 'update')
    }
  });

  const setActiveRole = (role) => {
    console.log(role);
    dispatch({type: role.name.toUpperCase()});
  };

  return (
    <AppContext.Provider
      value={{
        toggle: setActiveRole,
        role: state.role,
        checkBoxes: state.checkBoxes
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
