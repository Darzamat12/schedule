export interface IPreferences {
  readable: boolean;
  tagColor: ITagColor;
  darkTheme: boolean;
}

interface ITagColor {
  xcheck: string;
  task: string;
  test: string;
  lesson: string;
  deadline: string;
}

export const initialUserPreferencesState: IPreferences = {
  readable: false,
  tagColor: {
    xcheck: '',
    task: '',
    test: '',
    lesson: '',
    deadline: '',
  },
  darkTheme: false,
};
