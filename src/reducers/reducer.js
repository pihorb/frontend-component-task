import {
  ADD_FOLDERS,
  ADD_GEMS,
  ADMIN,
  CUSTOM,
  MEMBER,
  REMOVE_FOLDERS,
  REMOVE_GEMS,
  USER
} from './types';
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
    case ADD_GEMS:
      return {
        ...state,
        lastChoice: action.payload,
        checkBoxes: {
          gems: [...state.checkBoxes.gems, action.payload],
          folders: [...state.checkBoxes.folders]
        }
      };
    case ADD_FOLDERS:
      return {
        ...state,
        lastChoice: action.payload,
        checkBoxes: {
          gems: [...state.checkBoxes.gems],
          folders: [...state.checkBoxes.folders, action.payload]
        }
      };
    case REMOVE_GEMS:
      return {
        ...state,
        checkBoxes: {
          gems: state.checkBoxes.gems.filter((item) => item !== action.payload),
          folders: [...state.checkBoxes.folders]
        }
      };
    case REMOVE_FOLDERS:
      return {
        ...state,
        checkBoxes: {
          gems: [...state.checkBoxes.gems],
          folders: state.checkBoxes.folders.filter((item) => item !== action.payload)
        }
      };
    default:
      return state;
  }
};

export default reducer;
