import { initialUserPreferencesState, IPreferences } from './Preferences';

export interface IAction {
  readonly type: string;
  readonly payload?: any;
}

export interface IStore {
  readonly userPreferences: IPreferences;
}

export const initialStore: IStore = {
  userPreferences: initialUserPreferencesState,
};
