import { TIME_ZONE } from '../actionTypes';

const initialState = {
  timeOffset: (new Date().getTimezoneOffset() / 60) * -1,
};

const timeZoneReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TIME_ZONE: {
      return { ...state, timeOffset: action.payload };
    }
    default:
      return state;
  }
};

export default timeZoneReducer;
