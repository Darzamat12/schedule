import { connect } from 'react-redux';
import FilterTable from './FilterTable';

import { IStore } from '../../interfaces';

export default connect((store: IStore) => ({}), {})(FilterTable);
