import { fetchEventData } from '../../../redux/actions';
import { connect } from 'react-redux';
import Info from './Info';

const mapStateToProps = (state: any) => {
  return {
    loading: state.eventData.loading,
    error: state.eventData.error,
    data: state.eventData.data,
    darkTheme: state.userPreferences.darkTheme,
    userPreferences: state.userPreferences,
  };
};

const mapDispatchToProps = {
  fetchEventData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
