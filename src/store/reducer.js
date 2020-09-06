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
import {defaultSelected} from './context';

const reducer = (state, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        role: 'user',
        slots: {
          gems: defaultSelected('create', 'update'),
          folders: defaultSelected('create', 'update')
        }
      };
    case MEMBER:
      return {
        ...state,
        role: 'member',
        slots: {
          gems: defaultSelected(),
          folders: defaultSelected()
        }
      };
    case ADMIN:
      return {
        ...state,
        role: 'admin',
        slots: {
          gems: defaultSelected('create', 'update', 'move', 'delete'),
          folders: defaultSelected('create', 'update', 'move', 'delete')
        }
      };
    case CUSTOM:
      return {
        ...state,
        role: 'custom',
        slots: {
          gems: [],
          folders: []
        }
      };
    case ADD_GEMS:
      return {
        ...state,
        lastChoice: action.payload,
        slots: {
          gems: [...state.slots.gems, action.payload],
          folders: [...state.slots.folders]
        }
      };
    case ADD_FOLDERS:
      return {
        ...state,
        lastChoice: action.payload,
        slots: {
          gems: [...state.slots.gems],
          folders: [...state.slots.folders, action.payload]
        }
      };
    case REMOVE_GEMS:
      return {
        ...state,
        slots: {
          gems: state.slots.gems.filter((item) => item !== action.payload),
          folders: [...state.slots.folders]
        }
      };
    case REMOVE_FOLDERS:
      return {
        ...state,
        slots: {
          gems: [...state.slots.gems],
          folders: state.slots.folders.filter((item) => item !== action.payload)
        }
      };
    default:
      return state;
  }
};

export default reducer;
