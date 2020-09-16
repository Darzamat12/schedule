import { VISIBLE_COLUMN_TITLES } from './actionTypes';

const initialState = {
    columnArray: [],
}

const hideColumsReducer = (state = initialState, action: any ) => {
    switch(action.type){
        case VISIBLE_COLUMN_TITLES:
            return { ...initialState, columnArray: [...initialState.columnArray, action.payload]}
        default:
            return state;
    }
};

export default hideColumsReducer;
