import { ADD_IMPORTANT, REMOVE_IMPORTANT } from './actionTypes';

let initState = {
  importantCol: [],
};

export const importantReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_IMPORTANT:
      return {
        ...state,
        importantCol: state.importantCol.concat(action.payload),
      };
    case REMOVE_IMPORTANT:
      return {
        ...state,
        importantCol: state.importantCol.filter((el) => el != action.payload),
      };
  }
  return state;
};
