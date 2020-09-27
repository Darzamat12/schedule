import { VISIBLE_COLUMNS, INITIAL_COLUMNS } from './actionTypes';

const firstInitialState = {
  columnArray: [],
};

const secondInitialState = {
  initialColumns: [],
};

export const hideColumnsReducer = (state = firstInitialState, action: any) => {
  switch (action.type) {
    case VISIBLE_COLUMNS:
      return { ...firstInitialState, columnArray: action.payload };
    default:
      return state;
  }
};

export const initColumnsReducer = (state = secondInitialState, action: any) => {
  switch (action.type) {
    case INITIAL_COLUMNS:
      return { ...secondInitialState, initialColumns: action.payload };
    default:
      return state;
  }
};
