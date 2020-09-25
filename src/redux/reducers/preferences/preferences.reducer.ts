import { IPreferences, IAction } from '../../../interfaces';

export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_THEME = 'CHANGE_THEME';
export {REMOVE_IMPORTANT, ADD_IMPORTANT} from '../ImportantReducer/actionTypes'

export const changeUserFontSize = (payload: number): IAction => ({ type: CHANGE_FONT_SIZE, payload });
export const changeUserColor = (payload: string): IAction => ({ type: CHANGE_COLOR, payload });
export const changeUserTheme = (payload: boolean): IAction => ({ type: CHANGE_THEME, payload });

const initialState = {
  fontSize: 14,
  color: '#fff',
  lightTheme: true,
};

const preferencesReducer = (state = initialState, action: IAction): IPreferences => {
  switch (action.type) {
    case 'CHANGE_FONT_SIZE':
      return {
        ...state,
        fontSize: action.payload,
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload,
      };
    case 'CHANGE_THEME':
      return {
        ...state,
        lightTheme: action.payload,
      };
    default:
      return state;
  }
};

export default preferencesReducer;
