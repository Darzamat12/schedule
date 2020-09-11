import { HIDE_MODAL_WINDOW, PUT_DATA, SHOW_MODAL_WINDOW } from './types';

const initialState = {
  loading: true,
  fetchedData: [],
  // modalWindowData: []
};
export const CalendarPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return { ...state, fetchedData: action.payload };
    default:
      return state;
  }
};
