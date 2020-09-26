import { fetchEditData } from '../../../redux/actions';
import { connect } from 'react-redux';
import Feedback from './Feedback';

const mapStateToProps = (state: any) => {
  return {
    loading: state.editEvent.loading,
    error: state.editEvent.error,
    data: state.editEvent.data,
  };
};

const mapDispatchToProps = {
  fetchEditData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
