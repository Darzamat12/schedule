import { connect } from 'react-redux';
import ModalWindowForForm from './ModalWindowForForm';

const mapStateToProps = (state: any) => {
  return {
    darkTheme: state.userPreferences.darkTheme,
  };
};

export default connect(mapStateToProps, null)(ModalWindowForForm);
