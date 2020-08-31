import { DATA } from "../actionTypes"

const initialState = {
    data: 'any data',
}
  

const firstReducer = (state = initialState, action: {type: string, payload: { content: string}}) => {
    switch (action.type) {
      case DATA: {
        return { ...state, data: action.payload.content};
      }
      default: {
        return state;
      }
    }
  };
  
  export default firstReducer;
  