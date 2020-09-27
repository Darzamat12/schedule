import { VIEW_SCHEDULE_DATA } from '../actionTypes';

const initialState = {
  viewData: null,
};

const viewDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case VIEW_SCHEDULE_DATA: {
      return { ...state, viewData: action.payload };
    }
    default:
      return state;
  }
};

export default viewDataReducer;
