import { connect } from 'react-redux';
import UserSettings from './UserSettings';

import { changeUserColor, changeUserFontSize, changeUserTheme } from '../../redux/reducers/preferences/';

import { IStore } from '../../interfaces';

export default connect(
  (store: IStore) => ({
    userPreferences: store.userPreferences,
  }),
  {
    changeUserColor,
    changeUserFontSize,
    changeUserTheme,
  },
)(UserSettings);
