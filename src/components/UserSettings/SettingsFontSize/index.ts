import { connect } from 'react-redux';
import SettingsFontSize from './SettingsFontSize';
import { changeUserReadableMode } from '../../../redux/reducers/preferences/';

import { IStore } from '../../../interfaces';

export default connect(
  (store: IStore) => ({
    userPreferences: store.userPreferences,
  }),
  {
    changeUserReadableMode,
  },
)(SettingsFontSize);
