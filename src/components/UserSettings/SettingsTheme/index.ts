import { connect } from 'react-redux';
import SettingsTheme from './SettingsTheme';

import { changeUserTheme } from '../../../redux/reducers/preferences/';

import { IStore } from '../../../interfaces';

export default connect(
  (store: IStore) => ({
    userPreferences: store.userPreferences,
  }),
  {
    changeUserTheme,
  },
)(SettingsTheme);
