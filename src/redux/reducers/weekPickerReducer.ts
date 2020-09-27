import { WEEK } from '../actionTypes';

const initialState = {
  week: 1,
};

const weekPickerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WEEK: {
      return { ...state, week: action.payload };
    }
    default:
      return state;
  }
};

export default weekPickerReducer;
