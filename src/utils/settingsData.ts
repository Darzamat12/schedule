export const tags = [
  { name: 'Старт кросс-чека', type: 'xcheck' },
  { name: 'Выдача таска', type: 'task' },
  { name: 'Тест', type: 'test' },
  { name: 'Лекция', type: 'lesson' },
  { name: 'Дедлайн', type: 'deadline' },
];

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
    return JSON.parse(JSON.parse(window.localStorage.getItem('persist:userPreferences')).userPreferences).darkTheme
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
