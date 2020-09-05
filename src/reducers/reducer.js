import {ADMIN, CUSTOM, MEMBER, USER} from './types';
import {setCheckBoxes} from '../context/AppContext';

const reducer = (state, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        role: 'user',
        checkBoxes: {
          gems: setCheckBoxes('create', 'update'),
          folders: setCheckBoxes('create', 'update')
        }
      };
    case MEMBER:
      return {
        ...state,
        role: 'member',
        checkBoxes: {
          gems: setCheckBoxes(),
          folders: setCheckBoxes()
        }
      };
    case ADMIN:
      return {
        ...state,
        role: 'admin',
        checkBoxes: {
          gems: setCheckBoxes('create', 'update', 'move', 'delete'),
          folders: setCheckBoxes('create', 'update', 'move', 'delete')
        }
      };
    case CUSTOM:
      return {
        ...state,
        role: 'custom',
        checkBoxes: {
          gems: [],
          folders: []
        }
      };
    default:
      return state;
  }
};

export default reducer;
