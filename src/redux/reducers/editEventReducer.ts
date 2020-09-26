import { REQ_EDIT_EVENT, REQ_EDIT_EVENT_SUCCEEDED, REQ_EDIT_EVENT_FAILED } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const editEventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQ_EDIT_EVENT: {
      return { ...initialState, loading: true };
    }
    case REQ_EDIT_EVENT_SUCCEEDED: {
      return { ...initialState, data: action.payload };
    }
    case REQ_EDIT_EVENT_FAILED: {
      return { ...initialState, error: true };
    }
    default:
      return state;
  }
};

export default editEventReducer;
