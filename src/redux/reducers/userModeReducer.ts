import { USER_MODE } from '../actionTypes';

const initialState = {
  isAdmin: false,
};

const userModeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_MODE: {
      return { ...state, isAdmin: action.payload };
    }
    default:
      return state;
  }
};

export default userModeReducer;
