import { IPreferences, IAction } from '../../../interfaces';

export const CHANGE_READABLE_MODE = 'CHANGE_READABLE_MODE';
export const CHANGE_TAG_COLOR = 'CHANGE_TAG_COLOR';
export const CHANGE_THEME = 'CHANGE_THEME';
export { REMOVE_IMPORTANT, ADD_IMPORTANT } from '../ImportantReducer/actionTypes';

export const changeUserReadableMode = (payload: boolean): IAction => ({ type: CHANGE_READABLE_MODE, payload });
export const changeUserTagColor = (payload: string): IAction => ({ type: CHANGE_TAG_COLOR, payload });
export const changeUserTheme = (payload: boolean): IAction => ({ type: CHANGE_THEME, payload });

const initialState = {
  readable: false,
  tagColor: {
    self_education: '#2db7f5',
    meetup: '#2db7f5',
    test: '#FF6900',
    html_task: '#37D67A',
    codewars: '#37D67A',
    js_task: '#37D67A',
    deadline: '#ff0000',
    cross_check: '#a326f4',
  },
  darkTheme: false,
};

const preferencesReducer = (state = initialState, action: IAction): IPreferences => {
  switch (action.type) {
    case 'CHANGE_READABLE_MODE':
      return {
        ...state,
        readable: action.payload,
      };
    case 'CHANGE_TAG_COLOR':
      return {
        ...state,
        tagColor: action.payload,
      };
    case 'CHANGE_THEME':
      return {
        ...state,
        darkTheme: action.payload,
      };
    default:
      return state;
  }
};

export default preferencesReducer;
