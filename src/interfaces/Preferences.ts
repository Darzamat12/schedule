export interface IPreferences {
  fontSize: number;
  color: string;
  lightTheme: boolean;
}

export const initialUserPreferencesState: IPreferences = {
  fontSize: 0,
  color: '',
  lightTheme: true,
};
