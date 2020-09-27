export interface IPreferences {
  readable: boolean;
  tagColor: ITagColor;
  darkTheme: boolean;
}

interface ITagColor {
  self_education: string;
  meetup: string;
  test: string;
  html_task: string;
  codewars: string;
  js_task: string;
  deadline: string;
  cross_check: string;
}

export const initialUserPreferencesState: IPreferences = {
  readable: false,
  tagColor: {
    self_education: '',
    meetup: '',
    test: '',
    html_task: '',
    codewars: '',
    js_task: '',
    deadline: '',
    cross_check: '',
  },
  darkTheme: false,
};
