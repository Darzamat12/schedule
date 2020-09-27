import { connect } from 'react-redux';
import TaskPageDrawer from './TaskPageDrawer';

const mapStateToProps = (state: any) => {
  return {
    isAdmin: state.userMode.isAdmin,
    darkTheme: state.userPreferences.darkTheme,
  };
};

export default connect(mapStateToProps, null)(TaskPageDrawer);
