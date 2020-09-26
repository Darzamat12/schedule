export interface IPreferences {
  readable: boolean;
  tagColor: ITagColor;
  darkTheme: boolean;
}

interface ITagColor {
  self_education: string;
  interactive: string;
  video: string;
  html_task: string;
  codewars: string;
  js_task: string;
  interview: string;
}

export const initialUserPreferencesState: IPreferences = {
  readable: false,
  tagColor: {
    self_education: '',
    interactive: '',
    video: '',
    html_task: '',
    codewars: '',
    js_task: '',
    interview: '',
  },
  darkTheme: false,
};
