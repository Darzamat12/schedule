export const tags = [
  { name: 'self education', type: 'self_education' },
  { name: 'interactive', type: 'interactive' },
  { name: 'video', type: 'video' },
  { name: 'html task', type: 'html_task' },
  { name: 'codewars', type: 'codewars' },
  { name: 'js task', type: 'js_task' },
  { name: 'interview', type: 'interview' },
];

export const tagsMap =  new Map([
  ['self education', 'self_education'],
  ['interactive', 'interactive'],
  ['video', 'video'],
  ['html task', 'html_task'],
  ['codewars', 'codewars'],
  ['js task', 'js_task'],
  ['interview', 'interview'],
]);

export const pickerColors = [
  '#ff0000',
  '#FF6900',
  '#FCCB00',
  '#37D67A',
  '#308e00',
  '#2db7f5',
  '#004DCF',
  '#a326f4',
  '#FA28FF',
  '#F78DA7',
];

const getLocalStorageTheme = () => {
  try {
    return JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).userPreferences).darkTheme
      ? 'dark'
      : 'light';
  } catch {
    return 'light';
  }
};

export const themes = {
  dark: '/styles/dark.css',
  light: '/styles/light.css',
  initialTheme: getLocalStorageTheme(),
};
