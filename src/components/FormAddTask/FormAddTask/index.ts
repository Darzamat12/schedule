import { fetchPostData } from '../../../redux/actions';
import { connect } from 'react-redux';
import FormAddTask from './FormAddTask';

const mapStateToProps = (state: any) => {
  return {
    loading: state.postEvent.loading,
    error: state.postEvent.error,
    data: state.postEvent.data,
  };
};

const mapDispatchToProps = {
  fetchPostData,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddTask);
