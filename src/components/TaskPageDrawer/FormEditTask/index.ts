import { fetchEditData, fetchEventData } from '../../../redux/actions';
import { connect } from 'react-redux';
import FormEditTask from './FormEditTask';

const mapStateToProps = (state: any) => {
  return {
    loading: state.eventData.loading,
    error: state.eventData.error,
    data: state.eventData.data,
    loadingEdit: state.editEvent.loading,
    errorEdit: state.editEvent.error,
    dataEdit: state.editEvent.data,
  };
};

const mapDispatchToProps = {
  fetchEventData,
  fetchEditData,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEditTask);
