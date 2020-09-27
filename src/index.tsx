import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import './theme/dark.less';
import './theme/light.less';
import { themes } from './utils/settingsData';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={themes.initialTheme}>
        <App />
      </ThemeSwitcherProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
