import { connect } from 'react-redux';
import SettingsTagColor from './SettingsTagColor';
import { changeUserTagColor } from '../../../redux/reducers/preferences/';

import { IStore } from '../../../interfaces';

export default connect(
  (store: IStore) => ({
    userPreferences: store.userPreferences,
  }),
  {
    changeTagColor: changeUserTagColor,
  },
)(SettingsTagColor);
