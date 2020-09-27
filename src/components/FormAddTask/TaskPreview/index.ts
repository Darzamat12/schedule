import { connect } from 'react-redux';
import TaskPreview from './TaskPreview';

const mapStateToProps = (state: any) => {
  return {
    userPreferences: state.userPreferences,
  };
};

export default connect(mapStateToProps, null)(TaskPreview);
