import { PUT_DATA } from './types';

const initialState = {
  loading: true,
  fetchedData: [],
};
export const CalendarPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return { ...state, fetchedData: action.payload };
    default:
      return state;
  }
};
