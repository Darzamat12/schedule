import { IPreferences, IAction } from '../../../interfaces';

export const CHANGE_READABLE_MODE = 'CHANGE_READABLE_MODE';
export const CHANGE_TAG_COLOR = 'CHANGE_TAG_COLOR';
export const CHANGE_THEME = 'CHANGE_THEME';

export const changeUserReadableMode = (payload: boolean): IAction => ({ type: CHANGE_READABLE_MODE, payload });
export const changeUserTagColor = (payload: string): IAction => ({ type: CHANGE_TAG_COLOR, payload });
export const changeUserTheme = (payload: boolean): IAction => ({ type: CHANGE_THEME, payload });

const initialState = {
  readable: false,
  tagColor: {
    self_education: '#2db7f5',
    interactive: '#FF6900',
    video: '#FA28FF',
    html_task: '#308e00',
    codewars: '#ff0000',
    js_task: '#37D67A',
    interview: '#a326f4',
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
