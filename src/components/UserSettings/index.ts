import { connect } from 'react-redux';
import UserSettings from './UserSettings';

import { IStore } from '../../interfaces';

export default connect((store: IStore) => ({}), {})(UserSettings);
