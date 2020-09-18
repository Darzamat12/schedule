import { SHOW_ALERT, HIDE_ALERT } from './types';

const initialState = {
  alert: false,
};
export const TaskPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: true };
    case HIDE_ALERT:
      return { ...state, alert: false };
    default:
      return state;
  }
};
