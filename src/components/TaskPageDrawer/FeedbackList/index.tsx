import { fetchEventData } from '../../../redux/actions';
import { connect } from 'react-redux';
import FeedbackList from './FeedbackList';

const mapStateToProps = (state: any) => {
  return {
    loading: state.eventData.loading,
    error: state.eventData.error,
    data: state.eventData.data,
  };
};

const mapDispatchToProps = {
  fetchEventData,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackList);
